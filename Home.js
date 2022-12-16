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
    navigation.navigate('ChatScreen');
  };
  const handleMapNav = () => {
    navigation.navigate('MapScreen');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainView}>
        <HomeScreenButtons name={'Chat Screen'} pressActivity={handleChatNav} />
        <HomeScreenButtons name={'Map Screen'} pressActivity={handleMapNav} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
