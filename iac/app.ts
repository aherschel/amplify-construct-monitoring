#!/usr/bin/env node

import 'source-map-support/register';
import { App, Stack, Duration }from 'aws-cdk-lib';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { AmplifyData, AmplifyDataDefinition } from '@aws-amplify/data-construct';
import { AmplifyAuth } from '@aws-amplify/auth-construct-alpha';
import { AmplifyMonitoring } from './amplify-monitoring';
import { schema } from './schema';
import * as path from 'path';

const app = new App();
const stack = new Stack(app, 'MonitoringTestStack', { env: { region: 'us-west-2' } });

const echoFn = new NodejsFunction(stack, 'EchoFn', { entry: path.join(__dirname, 'echo.ts') });
const reverseFn = new NodejsFunction(stack, 'ReverseFn', { entry: path.join(__dirname, 'reverse.ts') });

const auth = new AmplifyAuth(stack, 'MonitoringTestAuth', {
  loginWith: {
    email: true,
  },
});

const data = new AmplifyData(stack, 'MonitoringTestApi', {
  definition: AmplifyDataDefinition.fromString(schema.transform().schema),
  authorizationModes: {
    defaultAuthorizationMode: 'AWS_IAM',
    userPoolConfig: { userPool: auth.resources.userPool },
    iamConfig: {
      identityPoolId: auth.resources.cfnResources.cfnIdentityPool.ref,
      authenticatedUserRole: auth.resources.authenticatedUserIamRole,
      unauthenticatedUserRole: auth.resources.unauthenticatedUserIamRole,
    },
    apiKeyConfig: { expires: Duration.days(7) }
  },
  functionNameMap: {
    Echo: echoFn,
    Reverse: reverseFn,
  },
});

new AmplifyMonitoring(stack, 'Monitoring', {
  data,
  auth,
  additionalResources: {
    functions: [echoFn, reverseFn],
  },
});
