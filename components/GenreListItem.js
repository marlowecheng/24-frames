import { StyleSheet, Image, View } from "react-native";
import { ListItem, Text } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

export default function GenreListItem({ itemData }) {

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
                    height={231}
                    width={179}
                    // source={{ uri: itemData.image }}
                />
            </View>
            <View style={styles.textBox}>
                <Text h3>{itemData.name}</Text>
            </View>
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