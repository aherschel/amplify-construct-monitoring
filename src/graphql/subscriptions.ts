/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateBlog = /* GraphQL */ `subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
  onCreateBlog(filter: $filter) {
    createdAt
    id
    posts {
      nextToken
      __typename
    }
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBlogSubscriptionVariables,
  APITypes.OnCreateBlogSubscription
>;
export const onCreatePost = /* GraphQL */ `subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
  onCreatePost(filter: $filter) {
    blog {
      createdAt
      id
      title
      updatedAt
      __typename
    }
    blogPostsId
    contents
    createdAt
    id
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onDeleteBlog = /* GraphQL */ `subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
  onDeleteBlog(filter: $filter) {
    createdAt
    id
    posts {
      nextToken
      __typename
    }
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBlogSubscriptionVariables,
  APITypes.OnDeleteBlogSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
  onDeletePost(filter: $filter) {
    blog {
      createdAt
      id
      title
      updatedAt
      __typename
    }
    blogPostsId
    contents
    createdAt
    id
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onUpdateBlog = /* GraphQL */ `subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
  onUpdateBlog(filter: $filter) {
    createdAt
    id
    posts {
      nextToken
      __typename
    }
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBlogSubscriptionVariables,
  APITypes.OnUpdateBlogSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
  onUpdatePost(filter: $filter) {
    blog {
      createdAt
      id
      title
      updatedAt
      __typename
    }
    blogPostsId
    contents
    createdAt
    id
    title
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
