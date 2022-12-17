import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useChatContext} from 'stream-chat-react-native';
import AuthContext from '../Contexts/Application';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const {setUserId} = useContext(AuthContext);
  const {client} = useChatContext();

  const connectUser = async () => {
    await client.connectUser(
      {
        id: username,
        name: fullName,
        first_name: fullName,
        // image: 'https://getstream.io/random_svg/?name=John',
      },
      client.devToken(username),
    );

    //create a channel
    // const channel = client.channel('livestream', 'live', {
    //   name: 'HiThere',
    // });
    // await channel.create();
    //to creat channel use create method instead of watch
    //channel ends here
    setUserId(username);
  };

  const signUpUser = () => {
    connectUser(username, fullName);
  };

  return (
    <SafeAreaView style={styles.rootComp}>
      <View style={styles.inputContainer}>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
          style={styles.inputItem}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={fullName}
          onChangeText={setFullName}
          placeholder="Full name"
          style={styles.inputItem}
        />
      </View>
      <TouchableOpacity onPress={signUpUser} style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootComp: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical: 5,
  },
  inputItem: {},
  buttonStyle: {
    backgroundColor: '#f3c847',
    padding: 15,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: '#000000',
    fontSize: 14,
  },
});

export default SignUp;
