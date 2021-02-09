import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../components/context';


const HomeScreen = ({ navigation }) => {

    const { signOut } = React.useContext(AuthContext)

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009487' barStyle='light-content' />
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duration={1500}
                    source={require("./img/logo.png")}
                    style={styles.logo}
                    resizeMode='stretch'
                />
            </View>
            <Animatable.View style={styles.footer}
                animation="fadeInUpBig">

                <Text style={styles.title}
                >LET US DELIGHT YOU</Text>

                <Text style={styles.text}
                >Delicious, handcrafted beverages and great-tasting food. The secret to making life better.</Text>

                <View style={styles.button} >
                    <TouchableOpacity onPress={() => navigation.navigate("SplashScreen")}>
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}> Order Now!</Text>

                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={styles.button} >
                    <TouchableOpacity onPress={() => { signOut() }} >
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}> Sign Out</Text>

                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
}

export default HomeScreen;

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
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    text: {
        color: 'grey',
        marginTop: 5,
        // fontStyle: 'Comic Sans MS'
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
});