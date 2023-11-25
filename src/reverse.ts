import type { AppSyncResolverEvent } from '@types/aws-lambda';
import type { ReverseArguments, ReverseResponse } from './schema';

/**
 * Reverse the message back to the caller.
 * @param event the event from appsync, using generated client types
 */
export const handler = async (event: AppSyncResolverEvent<ReverseArguments>): Promise<ReverseResponse> => ({
  reversedMessage: "Wait I'm not reversed",
});
