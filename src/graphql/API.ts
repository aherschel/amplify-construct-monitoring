/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type EchoResponse = {
  __typename: "EchoResponse",
  echoedMessage: string,
};

export type ReverseResponse = {
  __typename: "ReverseResponse",
  reversedMessage: string,
};

export type Blog = {
  __typename: "Blog",
  createdAt: string,
  id: string,
  posts?: ModelPostConnection | null,
  title: string,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  blog?: Blog | null,
  blogPostsId?: string | null,
  contents?: Array< string | null > | null,
  createdAt: string,
  id: string,
  title: string,
  updatedAt: string,
};

export type ModelBlogFilterInput = {
  and?: Array< ModelBlogFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelBlogFilterInput | null,
  or?: Array< ModelBlogFilterInput | null > | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelBlogConnection = {
  __typename: "ModelBlogConnection",
  items:  Array<Blog | null >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  and?: Array< ModelPostFilterInput | null > | null,
  blogPostsId?: ModelIDInput | null,
  contents?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelPostFilterInput | null,
  or?: Array< ModelPostFilterInput | null > | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelBlogConditionInput = {
  and?: Array< ModelBlogConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelBlogConditionInput | null,
  or?: Array< ModelBlogConditionInput | null > | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateBlogInput = {
  createdAt?: string | null,
  id?: string | null,
  title: string,
  updatedAt?: string | null,
};

export type ModelPostConditionInput = {
  and?: Array< ModelPostConditionInput | null > | null,
  blogPostsId?: ModelIDInput | null,
  contents?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelPostConditionInput | null,
  or?: Array< ModelPostConditionInput | null > | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreatePostInput = {
  blogPostsId?: string | null,
  contents?: Array< string | null > | null,
  createdAt?: string | null,
  id?: string | null,
  title: string,
  updatedAt?: string | null,
};

export type DeleteBlogInput = {
  id: string,
};

export type DeletePostInput = {
  id: string,
};

export type UpdateBlogInput = {
  createdAt?: string | null,
  id: string,
  title?: string | null,
  updatedAt?: string | null,
};

export type UpdatePostInput = {
  blogPostsId?: string | null,
  contents?: Array< string | null > | null,
  createdAt?: string | null,
  id: string,
  title?: string | null,
  updatedAt?: string | null,
};

export type ModelSubscriptionBlogFilterInput = {
  and?: Array< ModelSubscriptionBlogFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionBlogFilterInput | null > | null,
  title?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  blogPostsId?: ModelSubscriptionIDInput | null,
  contents?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
  title?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type EchoQueryVariables = {
  message: string,
};

export type EchoQuery = {
  Echo?:  {
    __typename: "EchoResponse",
    echoedMessage: string,
  } | null,
};

export type ReverseQueryVariables = {
  message: string,
};

export type ReverseQuery = {
  Reverse?:  {
    __typename: "ReverseResponse",
    reversedMessage: string,
  } | null,
};

export type GetBlogQueryVariables = {
  id: string,
};

export type GetBlogQuery = {
  getBlog?:  {
    __typename: "Blog",
    createdAt: string,
    id: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    blog?:  {
      __typename: "Blog",
      createdAt: string,
      id: string,
      title: string,
      updatedAt: string,
    } | null,
    blogPostsId?: string | null,
    contents?: Array< string | null > | null,
    createdAt: string,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type ListBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListBlogsQuery = {
  listBlogs?:  {
    __typename: "ModelBlogConnection",
    items:  Array< {
      __typename: "Blog",
      createdAt: string,
      id: string,
      title: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      blogPostsId?: string | null,
      contents?: Array< string | null > | null,
      createdAt: string,
      id: string,
      title: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateBlogMutationVariables = {
  condition?: ModelBlogConditionInput | null,
  input: CreateBlogInput,
};

export type CreateBlogMutation = {
  createBlog?:  {
    __typename: "Blog",
    createdAt: string,
    id: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  condition?: ModelPostConditionInput | null,
  input: CreatePostInput,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    blog?:  {
      __typename: "Blog",
      createdAt: string,
      id: string,
      title: string,
      updatedAt: string,
    } | null,
    blogPostsId?: string | null,
    contents?: Array< string | null > | null,
    createdAt: string,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type DeleteBlogMutationVariables = {
  condition?: ModelBlogConditionInput | null,
  input: DeleteBlogInput,
};

export type DeleteBlogMutation = {
  deleteBlog?:  {
    __typename: "Blog",
    createdAt: string,
    id: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  condition?: ModelPostConditionInput | null,
  input: DeletePostInput,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    blog?:  {
      __typename: "Blog",
      createdAt: string,
      id: string,
      title: string,
      updatedAt: string,
    } | null,
    blogPostsId?: string | null,
    contents?: Array< string | null > | null,
    createdAt: string,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type UpdateBlogMutationVariables = {
  condition?: ModelBlogConditionInput | null,
  input: UpdateBlogInput,
};

export type UpdateBlogMutation = {
  updateBlog?:  {
    __typename: "Blog",
    createdAt: string,
    id: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  condition?: ModelPostConditionInput | null,
  input: UpdatePostInput,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    blog?:  {
      __typename: "Blog",
      createdAt: string,
      id: string,
      title: string,
      updatedAt: string,
    } | null,
    blogPostsId?: string | null,
    contents?: Array< string | null > | null,
    createdAt: string,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnCreateBlogSubscription = {
  onCreateBlog?:  {
    __typename: "Blog",
    createdAt: string,
    id: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    blog?:  {
      __typename: "Blog",
      createdAt: string,
      id: string,
      title: string,
      updatedAt: string,
    } | null,
    blogPostsId?: string | null,
    contents?: Array< string | null > | null,
    createdAt: string,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnDeleteBlogSubscription = {
  onDeleteBlog?:  {
    __typename: "Blog",
    createdAt: string,
    id: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    blog?:  {
      __typename: "Blog",
      createdAt: string,
      id: string,
      title: string,
      updatedAt: string,
    } | null,
    blogPostsId?: string | null,
    contents?: Array< string | null > | null,
    createdAt: string,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnUpdateBlogSubscription = {
  onUpdateBlog?:  {
    __typename: "Blog",
    createdAt: string,
    id: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    title: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    blog?:  {
      __typename: "Blog",
      createdAt: string,
      id: string,
      title: string,
      updatedAt: string,
    } | null,
    blogPostsId?: string | null,
    contents?: Array< string | null > | null,
    createdAt: string,
    id: string,
    title: string,
    updatedAt: string,
  } | null,
};
