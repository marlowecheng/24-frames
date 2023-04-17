import React, { useState } from 'react';
import { StyleSheet, View, } from "react-native";
import { Text, Input, Button, Image } from "@rneui/themed";

export default function LoginScreen({ navigation }) {
    return (
        // login screen
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.displayTitle}>
                        Login
                    </Text>
                    <Text style={styles.subhead}>
                        Please enter your login info to sign in.
                    </Text>
                </View>
                {/* input fields for login and password */}
                <View style={styles.inputFields}>
                    <Input
                        label="Email Address"
                        placeholder="Email Address"
                        inputMode="email"
                        autoCapitalize="none"
                    />
                    <Input
                        label="Password"
                        placeholder="Password"
                        secureTextEntry={true}
                        style={{marginBottom: 0}}
                        renderErrorMessage={false}
                    />
                </View>
                <View style={{alignSelf: 'flex-end'}}><Text style={{ color: '#56BFD9' }}>Forgot password?</Text></View>
                {/* login button takes the user to onboarding */}
                <View style={{width: '100%', marginVertical: 0, marginTop: 32, marginBottom: 8}}>
                    <Button onPress={() => navigation.navigate('Onboarding1')}>LOG IN</Button>
                </View>
                <View style={{alignItems: 'center', width:'100%', marginVertical: 8}}>
                    <Text style={styles.subhead}>Don't have an account? <Text style={{ color: '#56BFD9' }}onPress={() => navigation.navigate('SignUp')}>Sign up</Text></Text>
                </View>

                {/* alternate login buttons using socials */}
                <View style={styles.footerContainer}>
                    <View style={styles.footerLine}>
                        <View style={{flex: 1, height: .5, backgroundColor: '#232323'}} />
                        <View style={{flex: 1.15, justifyContent: 'center'}}>
                            <Text style={{
                                textAlign: 'center',
                                fontSize:14,
                                fontFamily:"Poppins_600SemiBold",}}>or continue with</Text>
                        </View>
                        <View style={{flex: 1, height: .5, backgroundColor: '#232323'}} />
                    </View>
                    <View style={styles.footerBtnsContainer}>
                        <View style={[styles.footerBtns, styles.dropShadow]}><Image style={{ width:30, height:30}} source={require("../assets/icons/logo_google.png")} /></View>
                        <View style={[styles.footerBtns, styles.dropShadow]}><Image style={{ width:30, height:30}} source={require("../assets/icons/logo_facebook.png")} /></View>
                        <View style={[styles.footerBtns, styles.dropShadow]}><Image style={{ width:30, height:30}} source={require("../assets/icons/logo_apple.png")} /></View>
                        <View style={[styles.footerBtns, styles.dropShadow]}><Image style={{ width:30, height:30}} source={require("../assets/icons/logo_twitter.png")} /></View>
                    </View>
                </View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5EFDF",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
        paddingTop: 100,
    },
    contentContainer: {
        width: '80%',
        flex: 1,
        flexDirection: 'column',
        marginBottom: 32,
        alignItems: 'center',
    },
    headerContainer: {
        alignSelf: 'flex-start',
        justifyContent: 'flex-start'
    },
    displayTitle: {
        fontFamily:"Poppins_700Bold",
        fontSize:32,
    },
    subhead: {
        fontSize:14,
        fontFamily:"Poppins_600SemiBold",
        marginBottom: 42,
    },
    inputFields: {
        alignSelf: 'flex-start',
        width: '100%',
        justifyContent: 'center',
        marginBottom: 8,
    },
    footerContainer: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
        width: '100%',
        marginVertical: 8
    },
    footerLine: {
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 8,
    },
    footerBtnsContainer: {
        gap: 8,
        flexDirection: 'row',
    },  
    footerBtns: {
        backgroundColor: '#F5EFDF',
        width: 75,
        height: 45,
        borderWidth: .5,
        borderColor: '#232323',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    dropShadow: {
        shadowColor: '#232323',
        elevation: 4,
    }
});