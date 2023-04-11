import { StyleSheet, View } from "react-native";
import { useTheme, Text, Input, Button } from "@rneui/themed";

export default function SignUpScreen({ navigation }) {
    const { framesTheme } = useTheme();

    return (
        <View style={styles.container}>
            <View>
                <Text>
                    Sign up
                </Text>
                <Text >
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
                <Button
                    title="Sign Up"
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
    },

});