import React, { useState } from "react";
import { CREATE_MESSAGE_MUTATION } from "../graphql/mutation/createMessage";
import {
  CreateChatMutation,
  CreatedMessageMutationVariables,
} from "../gql/graphql";
import { useMutation } from "@apollo/client";

const ChatInput = ({
  userName,
  chatId,
}: {
  userName: string;
  chatId: number;
}) => {
  const [message, setMessage] = useState("");

  const [savedMessage, { error, loading }] = useMutation<
    CreateChatMutation,
    CreatedMessageMutationVariables
  >(CREATE_MESSAGE_MUTATION);

  const handleSend = () => {
    if (message.trim()) {
      console.log(message, userName);
      savedMessage({
        variables: {
          input: {
            chatId,
            text: message,
            userName,
          },
        },
      });
      setMessage("");
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="input-bar">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatInput;
