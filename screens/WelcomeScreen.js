import { StyleSheet, View, Button } from "react-native";
import { Text } from "@rneui/themed";

export default function WelcomeScreen({ navigation }) {


    return (
        <View style={styles.container}>
            <Text h1>
                This is the Welcome screen.
            </Text>
            <Button
                title="Home"
                raised={true}
                onPress={() => navigation.navigate('TabNavigator')}
            >
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5EFDF",
    },
    MovieList: {},
    GenreList: {},
});