import { StyleSheet, Image, View } from "react-native";
import { ListItem, Text } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
// import { Dropdown } from "react-native-material-dropdown";

export default function MovieListItem({ itemData }) {

    const navigation = useNavigation();

    return (
        <ListItem 
        style={styles.listItem}
        containerStyle={{ 
            backgroundColor: "#F5EFDF",
            padding:10,
         }}
        >
            <View style={styles.itemImg}>
                <Image 
                    height={202}
                    width={136}
                    source={{ uri: "http://image.tmdb.org/t/p/w154" + itemData.poster_path }}
                />
            </View>
            <View style={styles.textBox}>
                <Text h3 style={styles.allCaps}>{itemData.title}</Text>
                <Text style={styles.smallPrint}>
                    {itemData.overview}</Text>
            </View>
        </ListItem>
    )

}

const styles = StyleSheet.create({

    listItem: {
        width: "55%",
    },
    textBox: {
        alignSelf: "flex-start",
    },
    itemImg: {
        raised: true,
        elevation: 5,
        shadowColor: "#232323",
        borderRadius: 15,
        overflow: "hidden",
    },
    smallPrint: {
        fontSize: 8,
    },
    allCaps: {
        textTransform: "uppercase",
    }
})