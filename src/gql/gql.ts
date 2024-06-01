/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation createChat($input: createChatDto!) {\n    createChat(input: $input) {\n      id\n      chatName\n    }\n  }\n": types.CreateChatDocument,
    "\n  mutation createdMessage($input: createMessageDto!) {\n    createMessage(input: $input) {\n      text\n      userName\n    }\n  }\n": types.CreatedMessageDocument,
    "\n  mutation createUser($userName: String!) {\n    createUser(userName: $userName) {\n      userName\n      messages {\n        id\n        chatId\n      }\n    }\n  }\n": types.CreateUserDocument,
    "\n  query getChats {\n    chats {\n      id\n      chatName\n    }\n  }\n": types.GetChatsDocument,
    "\n  query getMessages($chatId: Int!) {\n    messages(chatId: $chatId) {\n      id\n      userName\n      text\n    }\n  }\n": types.GetMessagesDocument,
    "\n  query getUser($userName: String!) {\n    getUser(userName: $userName) {\n      userName\n    }\n  }\n": types.GetUserDocument,
    "\n  subscription createdChatChanel {\n    createChats {\n      id\n      chatName\n    }\n  }\n": types.CreatedChatChanelDocument,
    "\n  subscription createdSubMessage($chatId: Int!) {\n    createMessageSub(chatId: $chatId) {\n      id\n      text\n      userName\n    }\n  }\n": types.CreatedSubMessageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createChat($input: createChatDto!) {\n    createChat(input: $input) {\n      id\n      chatName\n    }\n  }\n"): (typeof documents)["\n  mutation createChat($input: createChatDto!) {\n    createChat(input: $input) {\n      id\n      chatName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createdMessage($input: createMessageDto!) {\n    createMessage(input: $input) {\n      text\n      userName\n    }\n  }\n"): (typeof documents)["\n  mutation createdMessage($input: createMessageDto!) {\n    createMessage(input: $input) {\n      text\n      userName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createUser($userName: String!) {\n    createUser(userName: $userName) {\n      userName\n      messages {\n        id\n        chatId\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createUser($userName: String!) {\n    createUser(userName: $userName) {\n      userName\n      messages {\n        id\n        chatId\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getChats {\n    chats {\n      id\n      chatName\n    }\n  }\n"): (typeof documents)["\n  query getChats {\n    chats {\n      id\n      chatName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getMessages($chatId: Int!) {\n    messages(chatId: $chatId) {\n      id\n      userName\n      text\n    }\n  }\n"): (typeof documents)["\n  query getMessages($chatId: Int!) {\n    messages(chatId: $chatId) {\n      id\n      userName\n      text\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getUser($userName: String!) {\n    getUser(userName: $userName) {\n      userName\n    }\n  }\n"): (typeof documents)["\n  query getUser($userName: String!) {\n    getUser(userName: $userName) {\n      userName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription createdChatChanel {\n    createChats {\n      id\n      chatName\n    }\n  }\n"): (typeof documents)["\n  subscription createdChatChanel {\n    createChats {\n      id\n      chatName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription createdSubMessage($chatId: Int!) {\n    createMessageSub(chatId: $chatId) {\n      id\n      text\n      userName\n    }\n  }\n"): (typeof documents)["\n  subscription createdSubMessage($chatId: Int!) {\n    createMessageSub(chatId: $chatId) {\n      id\n      text\n      userName\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;