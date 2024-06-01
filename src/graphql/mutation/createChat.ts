import { gql } from "@apollo/client";

export const CREATE_CHATS_MUTATION = gql`
  mutation createChat($input: createChatDto!) {
    createChat(input: $input) {
      id
      chatName
    }
  }
`;
