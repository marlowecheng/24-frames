import React, {useState, useEffect } from "react";

import { StyleSheet, Image, View, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ListItem, Text } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import StarRating from "react-native-star-rating-widget";

export default function MovieListItem({ itemData }) {

    const navigation = useNavigation();

    const [selectedList, setSelectedList] = useState();

    const [rating, setRating] = useState(0);

    // add the three useState for the fetch process
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataResult, setDataResult] = useState([]);

    // add useEffect for the fetch process
    useEffect(() => {
      fetch("https://api.themoviedb.org/3/movie/" + itemData.id + "?api_key=3636477fa6452fd3ef8c3fca44ea59ee&language=en-US")
        .then(res => res.json())
        .then(
          (result) => {
            // successful load
            setIsLoaded(true);
            setDataResult(result);
          },
          (error) => {
            // handle errors here
            setIsLoaded(true);
            setError(error);
          }
        )
    }, []);

    return (
        <ListItem 
        style={styles.listItem}
        containerStyle={{ 
            backgroundColor: "#F5EFDF",
            padding:10,
         }}
        >
            <Pressable 
                style={styles.itemImg}
                onPress={() => navigation.navigate("Details", {
                    movieId: itemData.id
                })}>
                <Image 
                    height={231}
                    width={156}
                    source={{ uri: "http://image.tmdb.org/t/p/w300" + itemData.poster_path }}
                />
            </Pressable>
            <View style={styles.textBox}>
                <Text h3 style={styles.allCaps} numberOfLines={2}>{itemData.title}</Text>
                <Text style={styles.medPrint} numberOfLines={3}>{dataResult.tagline}</Text>
                <Text   
                    style={styles.smallPrint}
                    numberOfLines={3}
                >{itemData.overview}
                </Text>
                <View
                    style={{ 
                        marginTop: 10,
                        alignSelf: "center",
                        width:140,
                    }}>
                    <Text style={{ 
                        fontSize: 10,
                     }}>Add to:</Text>
                </View>
                <View
                    style={{ 
                        marginTop: 5,
                        backgroundColor:"#F3B646",
                        justifyContent: "center",
                        alignSelf: "center",
                        width:150,
                        height: 39,
                        borderRadius:8,
                        overflow:"hidden",
                    }}>
                    <Picker
                        style={[styles.listPicker, {
                        }]}
                        itemStyle={{height: 50, transform:[{scaleX: 0.8},{scaleY: 0.8}]}}
                        selectedValue={selectedList}
                        onValueChange={(itemValue, itemIndex) => 
                            setSelectedList(itemValue)
                        }>
                        <Picker.Item
                            style={{ 
                                fontSize:10
                            }}
                            label="Pick a list."
                            value="Pick"
                        />
                        <Picker.Item
                            style={{ 
                                fontSize:10
                            }}
                            label="My Watch List"
                            value="WatchList"
                        />
                        <Picker.Item
                            style={{ 
                                fontSize:10
                            }}
                            label="My Favorites"
                            value="Favorites"
                        />
                        <Picker.Item
                            style={{ 
                                fontSize:10
                            }}
                            label="Watched"
                            value="Watched"
                        />
                    </Picker>
                </View>
                <View 
                    style={{ 
                        marginTop: 10,
                        flexDirection:"row",
                     }}>
                    <Text
                    style={{ 
                        fontSize:10
                    }}>Rate This Movie:</Text>
                    <StarRating
                        rating={rating}
                        onChange={setRating}
                        color="#F3B646"
                        starSize={14}
                    />
                </View>
            </View>
        </ListItem>
    )
}



const styles = StyleSheet.create({

    listItem: {
        width: "47%",
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
    medPrint: {
        fontSize: 12,
    },
    smallPrint: {
        fontSize: 8,
    },
    allCaps: {
        textTransform: "uppercase",
    },
    listPicker: {
        borderRadius: 15,
        width: 150,
        height: 50,
        alignSelf:"center",
    },
})