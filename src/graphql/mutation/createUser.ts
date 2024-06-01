import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser($userName: String!) {
    createUser(userName: $userName) {
      userName
      messages {
        id
        chatId
      }
    }
  }
`;
