import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './HomeStyles';

const Home = ({navigation}) => {
  const HomeScreenButtons = props => {
    return (
      <TouchableOpacity
        onPress={props.pressActivity}
        style={styles.chatAndMapButton}>
        <Text style={styles.chatAndMapText}>{props.name}</Text>
      </TouchableOpacity>
    );
  };
  const handleChatNav = () => {
    navigation.navigate('MapScreen');
  };
  const handleMapNav = () => {
    navigation.navigate('UserListScreen');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainView}>
        <HomeScreenButtons
          name={'Contact List'}
          pressActivity={handleChatNav}
        />
        <HomeScreenButtons name={'Chat List'} pressActivity={handleMapNav} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
