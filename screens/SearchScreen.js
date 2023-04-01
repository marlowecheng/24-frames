import { StyleSheet, View, FlatList } from "react-native";
import { Text } from "@rneui/themed";

export default function SearchScreen({ navigation }) {


    return (
        <View>
            <Text h1>
                This is the Search screen.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    MovieList: {},
    GenreList: {},
});