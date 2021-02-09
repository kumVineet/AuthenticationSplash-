import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, TextInput, StatusBar } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

import { AuthContext } from '../components/context';
// import Users from '../model/Users';


const SignInScreen = ({ navigation }) => {

    const [data, setData] = React.useState({
        userName: '',
        password: '',
        check_textInput: false,
        secureTextEntry: true,

    });

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                userName: val,
                check_textInput: true
            });
        } else {
            setData({
                ...data,
                userName: val,
                check_textInput: false
            });
        }
    }

    const passwordChange = (val) => {
        setData({
            ...data,
            password: val,
        });
    }

    const updateSecuretextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }


    const logIn = (userName, password) => {

        signIn(userName, password);
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009487' barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.text_header}>Good to see you again !!</Text>
            </View>
            <Animatable.View
                animation='fadeInUpBig'
                style={styles.footer}
            >
                <View style={styles.footer}>
                    <Text style={styles.text_footer}> Username</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Email/User_id"
                            style={styles.textInput}
                            autoCapitalize='none'
                            onChangeText={(val) => textInputChange(val)}
                        />

                        {data.check_textInput ?
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                            : null}
                    </View>

                    <Text style={[styles.text_footer, { marginTop: 35 }]}> Password</Text>
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Password"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize='none'
                            onChangeText={(val) => passwordChange(val)}
                        />
                        <TouchableOpacity onPress={updateSecuretextEntry}>
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity>
                        <Text style={{ color: '#009487', marginTop: 15 }}>Forgot Password</Text>
                    </TouchableOpacity>

                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => { logIn(data.userName, data.password) }}
                            style={styles.signIn}>
                            <LinearGradient
                                colors={['#08d4c4', '#01ab9d']}
                                style={styles.signIn}
                            >
                                <Text style={[styles.textSign, { color: '#fff' }]}>Sign In</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}
                            style={[styles.signIn, {
                                borderColor: '#009487',
                                borderWidth: 1,
                                marginTop: 15
                            }]}>
                            <Text
                                style={[styles.textSign, { color: '#009487' }]}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animatable.View>
        </View>
    );
}

export default SignInScreen;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009487'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14
    },
    button: {
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});