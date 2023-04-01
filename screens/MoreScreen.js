import { StyleSheet, View, FlatList } from "react-native";
import { Text } from "@rneui/themed";

export default function MoreScreen({ navigation }) {


    return (
        <View>
            <Text h1>
                This is the More screen.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    MovieList: {},
    GenreList: {},
});