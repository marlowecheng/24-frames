import { StyleSheet, View, Linking } from "react-native";
import { CheckBox, Text, Input, Button, Icon } from "@rneui/themed";

export default function LoginScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.displayTitle}>
                    Login
                </Text>
                <Text style={styles.subhead}>
                    Please enter your login info to sign in.
                </Text>
                <View>
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