import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useChatContext} from 'stream-chat-react-native';
import AuthContext from '../Contexts/Application';

const UserListItem = ({user}) => {
  const {client} = useChatContext();
  const {userId} = useContext(AuthContext);
  const navigation = useNavigation();
  const onTouch = async () => {
    if (!user.id || !userId) {
      return;
    }
    const channel = client.channel('messaging', {members: [user.id, userId]});
    await channel.watch();
    navigation.navigate('ChatScreen', {channel});
  };
  return (
    <TouchableOpacity onPress={onTouch} style={styles.mainContainer}>
      <Image style={styles.imgStyles} source={{uri: user.image || ''}} />
      <Text style={styles.textContainer}>{user.first_name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imgStyles: {
    width: 50,
    height: 50,
    backgroundColor: 'gray',
    borderRadius: 50,
    margin: 10,
  },
  textContainer: {
    textAlignVertical: 'center',
    color: '#000',
  },
});

export default UserListItem;
