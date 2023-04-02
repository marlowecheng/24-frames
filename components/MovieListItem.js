import React, {useState, useEffect } from "react";

import { StyleSheet, Image, View } from "react-native";
import { ListItem, Text } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
// import { Dropdown } from "react-native-material-dropdown";

export default function MovieListItem({ itemData }) {

    const navigation = useNavigation();

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
            <View style={styles.itemImg}>
                <Image 
                    height={202}
                    width={136}
                    source={{ uri: "http://image.tmdb.org/t/p/w154" + itemData.poster_path }}
                />
            </View>
            <View style={styles.textBox}>
                <Text h3 style={styles.allCaps}>{itemData.title}</Text>
                <Text>{dataResult.tagline}</Text>
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