import { StyleSheet, Image, View, Pressable } from "react-native";
import { ListItem, Text } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import StarRating from "react-native-star-rating-widget";

export default function ReviewListItem({ itemData }) {

    const navigation = useNavigation();

    return (
        // creates a list item from review-data
        <ListItem 
        style={styles.listItem}
        containerStyle={{ 
            backgroundColor: "#F5EFDF",
            padding:10,
         }}
        >
            <View
                style={{ 
                    flexDirection:"row"
                }}>
                {/* Avatar */}
                <View
                    style={{ 
                        marginRight: 15,
                    }}>
                    <Image
                    width={47}
                    height={47}
                    source={itemData.userImage}
                    />
                </View> 
                {/* stars */}
                <View
                    style={{ 
                        flexDirection:"column"
                    }}>
                    <StarRating
                        rating={itemData.stars}
                        color="#F3B646"
                        starSize={14}
                        emptyColor="#232323"
                    />
                    {/* review text */}
                    <Text
                        numberOfLines={5}
                        style={{ 
                            fontSize:10,
                         }}
                    >{itemData.text}</Text>
                </View>
            </View>
        </ListItem>
    )
}

const styles = StyleSheet.create({
    listItem: {
        width: "70%",
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