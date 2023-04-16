import React, { useState } from 'react';
import { StyleSheet, View, Linking } from "react-native";
import { CheckBox, Text, Input, Button, Icon, Image } from "@rneui/themed";

export default function SignUpScreen({ navigation }) {
    const [checked, setChecked] = React.useState(false);
    const toggleCheckbox = () => setChecked(!checked);

    return (
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
                <View style={styles.inputFields}>
                    <Input
                        label="Full Name"
                        placeholder="Full Name"
                        inputMode="text"
                        autoCapitalize="words"
                    />
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
                        style={{marginBottom: 0,}}
                        renderErrorMessage={false}
                    />
                    <CheckBox
                        checked={checked}
                        onPress={toggleCheckbox}
                        title= "I agree to the Terms of Service and Privacy Policy"
                        iconType="material"
                        checkedIcon="check-box"
                        uncheckedIcon="check-box-outline-blank"
                        checkedColor="#232323"
                        uncheckedColor="#232323"
                        size={15}
                        style={{marginTop: -4}}
                    />
                </View>
                <View style={{width: '100%', marginVertical: 0, marginTop: 32, marginBottom: 8}}>
                    <Button onPress={() => navigation.navigate('Onboarding1')}>SIGN UP</Button>
                </View>
                <View style={{alignItems: 'center', width:'100%', marginVertical: 8}}>
                    <Text style={styles.subhead}>Already a memeber? <Text style={{ color: '#56BFD9' }} onPress={() => navigation.navigate('LogIn')}>Log-in</Text></Text>
                </View>
                <View style={styles.footerContainer}>
                    <View style={styles.footerLine}>
                        <View style={{flex: 1, height: 1, backgroundColor: '#232323'}} />
                        <View style={{flex: 1.15, justifyContent: 'center'}}>
                            <Text style={{
                                textAlign: 'center',
                                fontSize:14,
                                fontFamily:"Poppins_600SemiBold",}}>or continue with</Text>
                        </View>
                        <View style={{flex: 1, height: 1, backgroundColor: '#232323'}} />
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
        borderWidth: 1,
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