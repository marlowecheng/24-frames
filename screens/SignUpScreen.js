import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "@rneui/themed";

export default function SignUpScreen({ navigation }) {

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
                    placeholder="Email"
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
        width: '75%',
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
    }

});