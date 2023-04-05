import React, { useState, useEffect } from "react";

import { StyleSheet, View, ImageBackground, ScrollView, ActivityIndicator, Image } from "react-native";
import {  } from "@rneui/themed";

export default function DetailScreen({ route, navigation }) {

    const { movieId } = route.params;

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataResult, setDataResult] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/" + movieId + "?api_key=3636477fa6452fd3ef8c3fca44ea59ee")
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
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
  
                {displayDataContainer(error, isLoaded, dataResult, navigation)}
  
            </ScrollView>
        </View>
    );

}

function displayDataContainer(error, isLoaded, dataResult, navigation) {

    if (error) {
        // show error message   
        return (
            <View>
                <Text>Error: {error.message}</Text>
            </View>
        );
    }
    
    else if (!isLoaded) {
        // show spinner while loading
        return(
            <View>
                <Text>Loading...</Text>
                <ActivityIndicator size="large" color="#E63946" />
            </View>
        );
    }
    else if (dataResult === undefined) {
        // show message if no records found
        return (
            <View>
                <Text>Nothing Found.</Text>
            </View>
        );  
    }
    else {
        // show the movie poster & details
        return (
            <View 
                style={styles.listItem}
                containerStyle={{ 
                    backgroundColor:"#457B9D",
                    padding:10,
                }}>
                <View
                    style={styles.contentWrap}
                    >
                    <Image 
                        style={styles.detailImg}
                        height={450}
                        width={300}
                        source={{ uri: "http://image.tmdb.org/t/p/w500" + dataResult.poster_path }}
                    />
                    <Text h2>{dataResult.title}</Text>
                    <Text h3>{dataResult.tagline}</Text>
                    <Text>{dataResult.overview}</Text>
                </View>
            </View>
        );
    } 
}

// declare the stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
    },

    backgroundImage: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },

    contentWrap: {
        width:"84%",
        justifyContent: "center",
        alignSelf: "center",
        paddingBottom: 25,
    },

    headingText: {
        alignSelf: "center",
    },
    
    clipList: {
        width: "90%",
        height: "90%",
        alignSelf: "center",
        backgroundColor: "transparent",
        marginTop: 30,
    },

    listItem: {
        width: "90%",
        raised: true,
        elevation: 3,
        shadowColor: "#000",
        borderRadius: 15,
        borderWidth: 3,
        borderColor: "#1D3557",
        backgroundColor: "#457B9D",
        marginBottom: 15,
        overflow: "hidden",
        marginTop: 25,
        alignSelf: "center",
    },

    detailImg: {
        alignSelf: "center",
        marginTop: 30,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },

    scrollView: {
        width: "100%",
        height: "100%",
    },

});