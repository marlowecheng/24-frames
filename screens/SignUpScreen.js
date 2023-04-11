import { StyleSheet, View, FlatList } from "react-native";
import { Text, Input } from "@rneui/themed";

export default function SignUpScreen({ navigation }) {


    return (
        <View style={styles.container}>
            <Text h1>
                Sign up
            </Text>
            <Text style>
                Start your movie journey today.
            </Text>
            <View>
                <View>
                    <Input
                        label="Full Name"
                        placeholder="Full Name"
                    />
                </View>
                <View>
                    <Input
                        label="Email"
                        placeholder="Email"
                    />
                </View>
                <View>
                    <Input
                        label="Password"
                        placeholder="Password"
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