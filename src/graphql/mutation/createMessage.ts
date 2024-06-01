import { gql } from "@apollo/client";

export const CREATE_MESSAGE_MUTATION = gql`
  mutation createdMessage($input: createMessageDto!) {
    createMessage(input: $input) {
      text
      userName
    }
  }
`;
