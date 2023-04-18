import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from "react-native";
import { CheckBox, Text, Input, Button, Image } from "@rneui/themed";
import { auth } from '../firebase';

export default function SignUpScreen({ navigation }) {

    const [checked, setChecked] = React.useState(false);
    const toggleCheckbox = () => setChecked(!checked);

    const [fullName, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("TabNavigator")
            }
        })
        return unsubscribe
    }, [])

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registered With: ', user.email);
            })
            .catch(error => alert(error.message))
    }

    return (
        // sign up screen
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.displayTitle}>
                        Sign up
                    </Text>
                    <Text style={styles.subhead}>
                        Start your movie journey today.
                    </Text>
                </View>

                {/* input fields for name, email, and password */}
                <View style={styles.inputFields}>
                    <Input
                        label="Full Name"
                        placeholder="Full Name"
                        inputMode="text"
                        autoCapitalize="words"
                        value={fullName}
                        onChangeText={text => setFullname(text)}
                    />
                    <Input
                        label="Email Address"
                        placeholder="Email Address"
                        inputMode="email"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <Input
                        label="Password"
                        placeholder="Password"
                        secureTextEntry={true}
                        style={{marginBottom: 0,}}
                        renderErrorMessage={false}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                </View>
                <View style={{width: '100%'}}>

                {/* checkbox for tos & privacy policy */}
                <CheckBox
                        checked={checked}
                        onPress={toggleCheckbox}
                        title= "I agree to the Terms of Service and Privacy Policy"
                        iconType="ionicon"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon="square-outline"
                        checkedColor="#232323"
                        uncheckedColor="#232323"
                        size={15}
                        style={styles.checkBoxStyle}
                    />
                </View>

                {/* signup button goes to onboarding */}
                <View style={{width: '100%', marginVertical: 0, marginTop: 32, marginBottom: 8}}>
                    <Button onPress={handleSignUp}>SIGN UP</Button>
                </View>
                <View style={{alignItems: 'center', width:'100%', marginVertical: 8}}>
                    <Text style={styles.subhead}>Already a memeber? <Text style={{ color: '#56BFD9' }} onPress={() => navigation.navigate('LogIn')}>Log-in</Text></Text>
                </View>

                {/* alternate sign up options using socials */}
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
        //marginTop: 102,
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
    },
    checkBoxStyle: {
        width: '100%',
        paddingHorizontal: 0,
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
        borderWidth: 0.5,
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