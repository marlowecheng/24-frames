import React, { useState } from 'react';
import { StyleSheet, View, Linking } from "react-native";
import { CheckBox, Text, Input, Button, Icon } from "@rneui/themed";

export default function SignUpScreen({ navigation }) {
    const [checked, setChecked] = React.useState(false);
    const toggleCheckbox = () => setChecked(!checked);

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.displayTitle}>
                    Sign up
                </Text>
                <Text style={styles.subhead}>
                    Start your movie journey today.
                </Text>
                <View>
                <Input
                    label="Full Name"
                    placeholder="Full Name"
                    inputMode="text"
                    autoCapitalize="words"
                />
                <Input
                    label="Email"
                    placeholder="Email Address"
                    inputMode="email"
                    autoCapitalize="none"
                />
                <Input
                    label="Password"
                    placeholder="Password"
                    secureTextEntry={true}
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
                />
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
    },
    contentContainer: {
        marginTop: 102,
        width: '80%',
        flex: 1,
        flexDirection: 'column',
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
});