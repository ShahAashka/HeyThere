import React, {useContext} from 'react';
import {ChannelList} from 'stream-chat-react-native';
import AuthContext from '../Contexts/Application';

const UserListScreen = ({navigation}) => {
  const onChannelPress = channel => {
    navigation.navigate('ChatScreen', {channel});
  };
  const {userId} = useContext(AuthContext);
  const filterChanel = {
    type: 'messaging',
    members: {
      $in: [userId],
    },
  };
  return <ChannelList onSelect={onChannelPress} filters={filterChanel} />;
};
export default UserListScreen;
