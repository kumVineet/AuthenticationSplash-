/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView, ActivityIndicator, View, Alert
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import RootScreen from './screens/RootScreen';
import HomeScreen from './screens/HomeScreen';
import { AuthContext } from './components/context';
import { useReducer } from 'react';



export default function App() {


  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };


  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };

      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };

      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };

      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };


  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);


  const authContext = React.useMemo(() => ({

    signIn: async (userName, password) => {

      let userToken;
      userToken = null;
      console.log(userName, password);
      if (userName == 'user' && password == 'pass') {
        userToken = 'dfgdfg';
        await AsyncStorage.setItem('userToken', userToken);
        // try {
        //   userToken = 'dfgdfg';
        //   await AsyncStorage.setItem('userToken', userToken);

        // } catch (error) {
        //   console.log(error);
        // }
      } else {
        Alert.alert("Login not successfull")
      }
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },


    signUp: () => {

    },


    signOut: async () => {

      console.log("HI");
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (error) {
        console.log(error);
      }
      dispatch({ type: 'LOGOUT' });
    }
  }), []);


  useEffect(() => {
    setTimeout(async () => {

      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (error) {
        console.log(error);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);


  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='green' />
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {loginState.userToken !== null ?
            <HomeScreen />
            :
            <RootScreen />
          }
        </NavigationContainer>
      </AuthContext.Provider>
    </SafeAreaView>
  )
}