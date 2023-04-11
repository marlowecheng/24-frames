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
        // style={styles.listItem}
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
                    source={{ uri: "http://image.tmdb.org/t/p/w154" + itemData.poster_path }}
                />
            </Pressable>
        </ListItem>
    )
}



const styles = StyleSheet.create({

    listItem: {
        width: "47%",
    },
    itemImg: {
        raised: true,
        elevation: 5,
        shadowColor: "#232323",
        borderRadius: 15,
        overflow: "hidden",
    },
})