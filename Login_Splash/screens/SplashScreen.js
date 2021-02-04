import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const SplashScreen = () => {
    // const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009487' barStyle='light-content' />
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duration='1500'
                    source={require("./img/logo.png")}
                    style={styles.logo}
                    resizeMode='stretch'
                />
            </View>
            <Animatable.View style={styles.footer}
                animation="fadeInUpBig">

                <Text style={styles.title}
                >Hey!! Welcome</Text>
                <Text style={styles.title}
                >Sign In with Account</Text>

                <View style={styles.button} >
                    <TouchableOpacity >
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}> Get Started</Text>
                            <MaterialIcons
                                name="navigate-next"
                                color="#fff" size={20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
}

export default SplashScreen;

const { height } = Dimensions.get("screen")
const height_logo = height * 0.2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009487'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
})