import { a, ClientSchema } from '@aws-amplify/data-schema';

// Setup types and exports for echo function

const echoArgumentFields = { message: a.string().required() }; // This is an artifact caused by inconsistency in request/response type def for functions right now
const EchoResponse = a.customType({ echoedMessage: a.string().required() });

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

// Setup types and exports for reverse function

const reverseArgumentFields = { message: a.string().required() }; // This is an artifact caused by inconsistency in request/response type def for functions right now
const ReverseResponse = a.customType({ reversedMessage: a.string().required() });

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

// Schema used in app rendering
export const schema = a.schema({
  Blog: a.model({
    title: a.string().required(),
    posts: a.hasMany('Post'),
  }).authorization([
    a.allow.public('iam'),
    a.allow.private('iam'),
    a.allow.public('apiKey'),
  ]),
  Post: a.model({
    title: a.string().required(),
    contents: a.string().array(),
    blog: a.belongsTo('Blog'),
  }).authorization([
    a.allow.public('iam'),
    a.allow.private('iam'),
    a.allow.public('apiKey'),
  ]),
  EchoResponse,
  Echo: a.query()
    .arguments(echoArgumentFields)
    .returns(a.ref('EchoResponse'))
    .function('Echo')
    .authorization([
      a.allow.public('iam'),
      a.allow.private('iam'),
      a.allow.public('apiKey'),
    ]),
  ReverseResponse,
  Reverse: a.query()
    .arguments(reverseArgumentFields)
    .returns(a.ref('ReverseResponse'))
    .function('Reverse')
    .authorization([
      a.allow.public('iam'),
      a.allow.private('iam'),
      a.allow.public('apiKey'),
    ]),
});

export type Schema = ClientSchema<typeof schema>;
