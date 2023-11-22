#!/usr/bin/env node

import 'source-map-support/register';
import { App, Stack, Duration }from 'aws-cdk-lib';
import { AmplifyGraphqlApi, AmplifyGraphqlDefinition } from '@aws-amplify/graphql-api-construct';
import { a, ClientSchema } from '@aws-amplify/data-schema';
import { MonitoringFacade } from 'cdk-monitoring-constructs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as path from 'path';

const app = new App();
const stack = new Stack(app, 'MonitoringTestStack', { env: { region: 'us-west-2' } });

const echoArgumentFields = { message: a.string().required() }; // This is an artifact caused by inconsistency in request/response type def for functions right now
const EchoResponse = a.customType({ echoedMessage: a.string().required() });

const reverseArgumentFields = { message: a.string().required() }; // This is an artifact caused by inconsistency in request/response type def for functions right now
const ReverseResponse = a.customType({ reversedMessage: a.string().required() });

const schema = a.schema({
  Blog: a.model({
    title: a.string().required(),
    posts: a.hasMany('Post'),
  }).authorization([a.allow.public()]),
  Post: a.model({
    title: a.string().required(),
    contents: a.string().array(),
    blog: a.belongsTo('Blog'),
  }).authorization([a.allow.public()]),
  EchoResponse,
  Echo: a.query()
    .arguments(echoArgumentFields)
    .returns(a.ref('EchoResponse'))
    .function('Echo')
    .authorization([a.allow.public()]),
  ReverseResponse,
  Reverse: a.query()
    .arguments(reverseArgumentFields)
    .returns(a.ref('ReverseResponse'))
    .function('Reverse')
    .authorization([a.allow.public()]),
});

// Generate an internal schema to produce function typings
const echoTypeSchema = a.schema({
  EchoArguments: a.customType(echoArgumentFields),
  EchoResponse,
  EchoAnchor: a.model({ // Anchor model exposed to give me typing for the lambda, no access to this is exposed
    arguments: a.ref('EchoArguments').required(),
    response: a.ref('EchoResponse').required(),
  }),
});
type EchoTypes = ClientSchema<typeof echoTypeSchema>['EchoAnchor'];
export type EchoArguments = EchoTypes['arguments'];
export type EchoResponse = EchoTypes['response'];

const echoFn = new NodejsFunction(stack, 'EchoFn', {
  entry: path.join(__dirname, 'echo.ts'),
  runtime: Runtime.NODEJS_18_X,
});

// Generate an internal schema to produce function typings
const reverseTypeSchema = a.schema({
  ReverseArguments: a.customType(reverseArgumentFields),
  ReverseResponse,
  Reverse: a.model({ // Anchor model exposed to give me typing for the lambda, no access to this is exposed
    arguments: a.ref('ReverseArguments').required(),
    response: a.ref('ReverseResponse').required(),
  }),
});
type ReverseTypes = ClientSchema<typeof reverseTypeSchema>['Reverse'];
export type ReverseArguments = ReverseTypes['arguments'];
export type ReverseResponse = ReverseTypes['response'];

const reverseFn = new NodejsFunction(stack, 'ReverseFn', {
  entry: path.join(__dirname, 'reverse.ts'),
  runtime: Runtime.NODEJS_18_X,
});

const api = new AmplifyGraphqlApi(stack, 'MonitoringTestApi', {
  definition: AmplifyGraphqlDefinition.fromString(schema.transform().schema),
  authorizationModes: { apiKeyConfig: { expires: Duration.days(7) } },
  functionNameMap: {
    Echo: echoFn,
    Reverse: reverseFn,
  },
});

// Set up monitoring

const monitoring = new MonitoringFacade(stack, 'Monitoring');

monitoring.monitorAppSyncApi({
  api: api.resources.graphqlApi,
  humanReadableName: api.resources.cfnResources.cfnGraphqlApi.name,
  alarmFriendlyName: api.resources.cfnResources.cfnGraphqlApi.name,
});
Object.values(api.resources.tables).forEach((table) => monitoring.monitorDynamoTable({
  table,
  humanReadableName: table.tableName,
  alarmFriendlyName: table.tableName,
})); // TODO: Support for both ddb and amplifytable resources
[
  ...Object.values(api.resources.functions),
  echoFn,
].forEach((lambdaFunction) => monitoring.monitorLambdaFunction({
  lambdaFunction,
  humanReadableName: lambdaFunction.functionName,
  alarmFriendlyName: lambdaFunction.functionName,
}));
