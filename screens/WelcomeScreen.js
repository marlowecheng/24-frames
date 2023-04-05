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
            />
            <Button
                title="SignUp"
                raised={true}
                onPress={() => navigation.navigate('SignUp')}
            />
            <Button
                title="LogIn"
                raised={true}
                onPress={() => navigation.navigate('LogIn')}
            />
            <Button
                title="Onboarding1"
                raised={true}
                onPress={() => navigation.navigate('Onboarding1')}
            />
            <Button
                title="Onboarding2"
                raised={true}
                onPress={() => navigation.navigate('Onboarding2')}
            />
            <Button
                title="Onboarding3"
                raised={true}
                onPress={() => navigation.navigate('Onboarding3')}
            />
            <Button
                title="Onboarding4"
                raised={true}
                onPress={() => navigation.navigate('Onboarding4')}
            />
            <Button
                title="Onboarding5"
                raised={true}
                onPress={() => navigation.navigate('Onboarding5')}
            />
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