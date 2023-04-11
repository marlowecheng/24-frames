import { StyleSheet, View, FlatList, Image } from "react-native";
import { Text } from "@rneui/themed";

import { getUserById } from "../data/user-data";

export default function ProfileScreen({ itemData, navigation }) {


    return (
        <View style={styles.container}>
            <View
                style={{ 
                    marginRight: 15,
                }}>
                <Image
                width={47}
                height={47}
                source={getUserById(1).userImage}
                />
            </View> 
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