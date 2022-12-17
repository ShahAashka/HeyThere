import React, {useEffect, useState, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {OverlayProvider, Chat} from 'stream-chat-react-native';
import {StreamChat} from 'stream-chat';
import AuthContext from './Contexts/Application';
import Home from './Components/Home';
import UserListScreen from './Components/UserListScreen';
import ChatScreen from './Components/ChatScreen';
import SignUp from './Components/SignUp';
import MapScreen from './Components/MapScreen';

const Stack = createNativeStackNavigator();

const API_KEY = 'wrtcuqb37tf3';
const client = StreamChat.getInstance(API_KEY);

export default function App() {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    return () => client.disconnectUser();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AuthContext.Provider value={{userId, setUserId}}>
        <OverlayProvider>
          <Chat client={client}>
            <NavigationContainer>
              <Stack.Navigator>
                {!userId ? (
                  <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{
                      headerShown: false,
                    }}
                  />
                ) : (
                  <>
                    <Stack.Screen
                      name="Home"
                      component={Home}
                      options={{
                        headerShown: false,
                      }}
                    />
                    <Stack.Screen
                      name="MapScreen"
                      component={MapScreen}
                      options={{
                        headerTitle: 'Contacts',
                      }}
                    />
                    <Stack.Screen
                      name="UserListScreen"
                      component={UserListScreen}
                      options={{
                        headerTitle: 'Chats',
                      }}
                    />
                    <Stack.Screen name="ChatScreen" component={ChatScreen} />
                  </>
                )}
              </Stack.Navigator>
            </NavigationContainer>
          </Chat>
        </OverlayProvider>
      </AuthContext.Provider>
    </GestureHandlerRootView>
  );
  // }
}
