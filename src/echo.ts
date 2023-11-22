import type { AppSyncResolverEvent } from '@types/aws-lambda';
import type { EchoArguments, EchoResponse } from './app';

/**
 * Echo the message back to the caller.
 * @param event the event from appsync, using generated client types
 */
export const handler = async (event: AppSyncResolverEvent<EchoArguments>): Promise<EchoResponse> => ({
  echoedMessage: `${event.arguments.message}... ${event.arguments.message}`,
});
