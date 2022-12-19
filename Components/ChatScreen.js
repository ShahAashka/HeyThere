import React from 'react';
import {Channel, MessageList, MessageInput} from 'stream-chat-react-native';
import {Text} from 'react-native';

const ChatScreen = ({route}) => {
  const channel = route.params?.channel;
  if (!channel) {
    return <Text>Channel not found</Text>;
  } else {
    return (
      <Channel channel={channel}>
        <MessageList />
        <MessageInput />
      </Channel>
    );
  }
};
export default ChatScreen;
