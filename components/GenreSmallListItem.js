import { StyleSheet, Image, View, Pressable } from "react-native";
import { ListItem, Text } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { getGenreById } from "../data/genre-data";

export default function GenreSmallListItem({ itemData }) {

    // const for navigation
    const navigation = useNavigation();

    // gets the item data from genre-data
    const currGenre = getGenreById(itemData);

    console.log(currGenre);

    return (

        // list item of item data
        <ListItem 
        style={styles.listItem}
        containerStyle={{ 
            backgroundColor: "#F5EFDF",
            padding:10,
         }}
        >
            {/* creates the small list of genre cards found on the search page */}
            <Pressable 
                style={styles.itemImg}
                onPress={() => navigation.navigate("Results", {
                    genreId: currGenre.genreId
                })}>
                <Image 
                    width={179}
                    height={70}
                    source={currGenre.genreSmallImage}
                />
                <View style={styles.textBox}>
                    <Text h3>{currGenre.name}</Text>
                </View>
            </Pressable>
        </ListItem>
    )
}
const styles = StyleSheet.create({
    listItem: {
        width: 203,
        backgroundColor: "#F5EFDF",
    },
    textBox: {
        position: "absolute",
        top:0,
        left:0,
        right:0,
        bottom:0,
        justifyContent: "center",
        alignItems: "center",
    },
    itemImg: {
        height: 70,
        raised: true,
        elevation: 2,
        shadowColor: "#232323",
        borderRadius: 15,
        overflow: "hidden",
        justifyContent:"center",
    },
})