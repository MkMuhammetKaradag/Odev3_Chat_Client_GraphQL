import { gql } from "@apollo/client";

export const GET_MESSAGES_QUERY = gql`
  query getMessages($chatId: Int!) {
    messages(chatId: $chatId) {
      id
      userName
      text
    }
  }
`;
