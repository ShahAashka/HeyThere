/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useChatContext} from 'stream-chat-react-native';
import UserListItem from './UserListItem';

const UserListScreen = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {client} = useChatContext();

  const fetchUser = async () => {
    setIsLoading(true);
    const response = await client.queryUsers({});
    setUsers(response.users);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  const renderItem = item => {
    return <UserListItem user={item} />;
  };
  return (
    <View style={styles.mainContainer}>
      {users && (
        <FlatList
          data={users}
          renderItem={({item}) => renderItem(item)}
          onRefresh={fetchUser}
          refreshing={isLoading}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    // margin: 8,
  },
});

export default UserListScreen;
