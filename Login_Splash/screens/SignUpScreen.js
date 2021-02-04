import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Platform, TextInput, StatusBar } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';


const SignUpScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009487' barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now !!</Text>
            </View>
            <Animatable.View
                animation='fadeInUpBig'
                style={styles.footer}
            >
                <View style={styles.footer}>
                    <Text style={styles.text_footer}> Email</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Usename"
                            style={styles.textInput}
                            autoCapitalize='none'
                        />

                        <Feather
                            name="check-circle"
                            color="green"
                            size={20}
                        />
                    </View>

                    <Text style={[styles.text_footer, { marginTop: 35 }]}> Date of Birth</Text>
                    <View style={styles.action}>
                        <Feather
                            name="calendar"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="dd-mm-yyyy"
                            style={styles.textInput}
                            autoCapitalize='none'
                            secureTextEntry={true}
                        />
                        <Feather
                            name="check-circle"
                            color="green"
                            size={20}
                        />
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
                            style={styles.textInput}
                            autoCapitalize='none'
                            secureTextEntry={true}
                        />
                        <Feather
                            name="eye-off"
                            color="grey"
                            size={20}
                        />
                    </View>

                    <Text style={[styles.text_footer, { marginTop: 35 }]}> Confirm Password</Text>
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Re-enter Password"
                            style={styles.textInput}
                            autoCapitalize='none'
                            secureTextEntry={true}
                        />
                        <Feather
                            name="eye-off"
                            color="grey"
                            size={20}
                        />
                    </View>

                    <Text style={[styles.text_footer, { marginTop: 35 }]}> Mobile Number</Text>
                    <View style={styles.action}>
                        <Feather
                            name="phone"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="+91"
                            style={styles.textInput}
                            autoCapitalize='none'
                            secureTextEntry={true}
                        />
                        <Feather
                            name="check-circle"
                            color="green"
                            size={20}
                        />
                    </View>

                    <View style={styles.button}>
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, { color: '#fff' }]}>Sign Up</Text>
                        </LinearGradient>

                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={[styles.signIn, {
                                borderColor: '#009487',
                                borderWidth: 1,
                                marginTop: 15
                            }]}>
                            <Text style={[styles.textSign, {
                                color: '#009487'
                            }]}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animatable.View>
        </View>
    );
}

export default SignUpScreen;

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
        flex: 6,
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
        alignItems: 'center',
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