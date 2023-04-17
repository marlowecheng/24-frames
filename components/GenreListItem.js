import { StyleSheet, Image, View, Pressable } from "react-native";
import { ListItem, Text } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function GenreListItem({ itemData }) {

    // navigation const to take the user to the Results page after button press
    const navigation = useNavigation();

    // creates a list of genres using data passed from genre-data
    // creates a button with a background image and a title
    return (
        <ListItem 
        style={styles.listItem}
        containerStyle={{ 
            backgroundColor: "#F5EFDF",
            padding:10,
         }}
        >
            {/* creates clickable cards with the genre
                takes user to the genre list page when clicked
                passes the genreId into the genre list page
            */}
            <Pressable 
                style={styles.itemImg}
                onPress={() => navigation.navigate("Results", {
                    genreId: itemData.genreId,
                    genreName: itemData.name
                })}>
                <Image 
                    width={179}
                    height={231}
                    source={itemData.genreImage}
                />
                <View style={styles.textBox}>
                    <Text h3>{itemData.name}</Text>
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
        raised: true,
        elevation: 2,
        shadowColor: "#232323",
        borderRadius: 15,
        overflow: "hidden",
    },
})