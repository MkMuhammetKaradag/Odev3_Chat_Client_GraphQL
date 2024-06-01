import {
  useLazyQuery,
  useMutation,
  useQuery,
  useSubscription,
} from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
  CreateUserMutation,
  CreatedChatChanelSubscription,
  GetChatsQuery,
  GetChatsQueryVariables,
  GetUserQuery,
  GetUserQueryVariables,
} from "../gql/graphql";
import { GET_CHATS } from "../graphql/queries/createChat";
import { CREATED_CHATS_SUBSCRIPTION } from "../graphql/subscriptions/createChat";
import { Link } from "react-router-dom";
import { CREATE_USER_MUTATION } from "../graphql/mutation/createUser";
import { GET_USER_QUERY } from "../graphql/queries/getUser";

const Home = () => {
  const [userName, setUserName] = useState("");
  const { data, loading, error, subscribeToMore } =
    useQuery<GetChatsQuery>(GET_CHATS);

  const [
    getUser,
    { data: getUserData, error: getUserError, loading: getUserLoading },
  ] = useLazyQuery<GetUserQuery, GetUserQueryVariables>(GET_USER_QUERY);

  const [
    savedUser,
    { data: userData, error: userError, loading: userLoading },
  ] = useMutation<CreateUserMutation>(CREATE_USER_MUTATION);

  const createUser = () => {
    if (userName) {
      savedUser({
        variables: {
          userName: userName,
        },
      });
      if (userData?.createUser.userName) {
        setUserName(userData?.createUser.userName);
      }
    }
  };

  const getUserName = () => {
    if (userName) {
      getUser({
        variables: {
          userName: userName,
        },
      });
      if (getUserData?.getUser.userName) {
        setUserName(getUserData?.getUser.userName);
      }
    }
  };

  useEffect(() => {
    subscribeToMore({
      document: CREATED_CHATS_SUBSCRIPTION,
      updateQuery: (
        prev,
        {
          subscriptionData,
        }: {
          subscriptionData: {
            data: CreatedChatChanelSubscription;
          };
        }
      ) => {
        if (!subscriptionData.data) return prev;
        const newPost = subscriptionData.data.createChats;
        const newPosts = [newPost, ...prev.chats];
        return { chats: newPosts };
      },
      onError: (err) => {
        console.log(err);
      },
    });
  }, [subscribeToMore]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error...</p>;
  }

  return (
    <div>
      <div>
        <div>
          <input
            placeholder="create  or login user aname"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <button onClick={createUser}>create</button>
          <button onClick={getUserName}>login</button>
        </div>
      </div>
      {(userData?.createUser.userName || getUserData?.getUser.userName) && (
        <div>
          {data &&
            data.chats.map((chat) => (
              <div key={chat.id}>
                <Link
                  to={{
                    pathname: `chat/${chat.id}`,
                  }}
                  state={{
                    userName,
                  }}
                >
                  {chat.chatName}
                </Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
