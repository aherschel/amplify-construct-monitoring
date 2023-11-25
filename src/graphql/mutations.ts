/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createBlog = /* GraphQL */ `mutation CreateBlog(
  $condition: ModelBlogConditionInput
  $input: CreateBlogInput!
) {
  createBlog(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateBlogMutationVariables,
  APITypes.CreateBlogMutation
>;
export const createPost = /* GraphQL */ `mutation CreatePost(
  $condition: ModelPostConditionInput
  $input: CreatePostInput!
) {
  createPost(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const deleteBlog = /* GraphQL */ `mutation DeleteBlog(
  $condition: ModelBlogConditionInput
  $input: DeleteBlogInput!
) {
  deleteBlog(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteBlogMutationVariables,
  APITypes.DeleteBlogMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $condition: ModelPostConditionInput
  $input: DeletePostInput!
) {
  deletePost(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const updateBlog = /* GraphQL */ `mutation UpdateBlog(
  $condition: ModelBlogConditionInput
  $input: UpdateBlogInput!
) {
  updateBlog(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateBlogMutationVariables,
  APITypes.UpdateBlogMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $condition: ModelPostConditionInput
  $input: UpdatePostInput!
) {
  updatePost(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
