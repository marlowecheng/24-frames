import { StyleSheet, View, FlatList } from "react-native";
import { Text } from "@rneui/themed";

export default function MoreScreen({ navigation }) {


    return (
        <View style={styles.container}>
            <Text h1>
                This is the More screen.
            </Text>
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