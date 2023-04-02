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
                    height={202}
                    width={136}
                    // source={{ uri: itemData.image }}
                />
            </View>
            <View style={styles.textBox}>
                <Text h3 style={styles.allCaps}>{itemData.name}</Text>
            </View>
        </ListItem>
    )

}

const styles = StyleSheet.create({

    listItem: {
        backgroundColor: "#F5EFDF",
        width: "55%",
    },
    textBox: {
        position: "absolute",
        justifyContent: "center",
        alignSelf: "center",
    },
    itemImg: {
        raised: true,
        elevation: 5,
        shadowColor: "#232323",
        borderRadius: 15,
        overflow: "hidden",
    },
})