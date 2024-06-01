import { gql } from "@apollo/client";

export const GET_CHATS= gql`
  query getChats {
    chats {
      id
      chatName
    }
  }
`;
