import { gql } from "@apollo/client";

export const CREATED_MESSAGE_SUBSCRIPTION = gql`
  subscription createdSubMessage($chatId: Int!) {
    createMessageSub(chatId: $chatId) {
      id
      text
      userName
    }
  }
`;
