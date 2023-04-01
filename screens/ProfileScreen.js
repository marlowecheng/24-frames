import { StyleSheet, View, FlatList } from "react-native";
import { Text } from "@rneui/themed";

export default function ProfileScreen({ navigation }) {


    return (
        <View>
            <Text h1>
                This is the Profile screen.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    MovieList: {},
    GenreList: {},
});