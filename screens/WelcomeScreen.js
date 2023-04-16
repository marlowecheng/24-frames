import { StyleSheet, View, Button, Image } from "react-native";
import { Text } from "@rneui/themed";

export default function WelcomeScreen({ navigation }) {


    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/24Frames_Logo.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5EFDF",
    },
});