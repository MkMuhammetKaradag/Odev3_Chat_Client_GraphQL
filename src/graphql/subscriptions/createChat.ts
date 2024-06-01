import { gql } from "@apollo/client";

export const CREATED_CHATS_SUBSCRIPTION = gql`
  subscription createdChatChanel {
    createChats {
      id
      chatName
    }
  }
`;
