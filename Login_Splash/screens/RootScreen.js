import React from 'react';
import {SafeAreaView} from 'react-native'

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const RootScreen = ()=> {
    return (
        <SafeAreaView>
        <SplashScreen/>
        {/* <SignInScreen/>
        <SignUpScreen/> */}
        </SafeAreaView>
    );
}

export default RootScreen;