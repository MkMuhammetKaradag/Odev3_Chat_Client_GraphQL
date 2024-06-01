import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { GET_MESSAGES_QUERY } from "../graphql/queries/getMessages";
import {
  CreatedSubMessageSubscription,
  GetMessagesQuery,
  GetMessagesQueryVariables,
} from "../gql/graphql";
import { useQuery } from "@apollo/client";
import { CREATED_MESSAGE_SUBSCRIPTION } from "../graphql/subscriptions/createdMessage";
import ChatInput from "../components/ChatInput";
interface LocationState {
  userName: string;
}
const Chat = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let { id } = useParams();
  const { userName } = location.state as LocationState;
  const {
    data: messagesData,
    loading: messagesLoading,
    error: messagesError,
    subscribeToMore,
  } = useQuery<GetMessagesQuery, GetMessagesQueryVariables>(
    GET_MESSAGES_QUERY,
    {
      variables: {
        chatId: id ? Number(id) : 1,
      },
    }
  );

  useEffect(() => {
    subscribeToMore({
      document: CREATED_MESSAGE_SUBSCRIPTION,
      variables: {
        chatId: id ? Number(id) : 1,
      },
      updateQuery: (
        prev,
        {
          subscriptionData,
        }: {
          subscriptionData: {
            data: CreatedSubMessageSubscription;
          };
        }
      ) => {
        if (!subscriptionData.data) return prev;

        const newmessage = subscriptionData.data.createMessageSub;
        if (!prev.messages) {
          const newMessages = [newmessage];
          return { messages: newMessages };
        }
        const newMessages = [...prev.messages, newmessage];
        return { messages: newMessages };
      },
      onError: (err) => {
        console.log(err);
      },
    });
  }, [subscribeToMore]);

  if (messagesError) {
    console.log(messagesError);
  }
  console.log(messagesData);
  return (
    <div className="chat-screen">
      <div className="message-list">
        {messagesData?.messages.map((message) => (
          <div
            key={message.id}
            className={`message-item  ${
              message.userName == userName
                ? "message-item-isuser"
                : "message-item-owner"
            }  `}
          >
            {message.userName == userName ? (
              <span>{message.text}</span>
            ) : (
              <span>
                {message.userName}: {message.text}
              </span>
            )}
          </div>
        ))}
      </div>
      <ChatInput userName={userName} chatId={Number(id)}></ChatInput>
    </div>
  );
};

export default Chat;
