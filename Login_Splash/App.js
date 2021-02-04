/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  ActivityIndicator
} from 'react-native';
import RootScreen from './screens/RootScreen';
import SplashScreen from './screens/SplashScreen'



const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SplashScreen />
    </SafeAreaView>
  )
}



export default App;
