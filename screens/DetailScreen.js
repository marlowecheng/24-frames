import React, { useState, useEffect } from "react";

import { StyleSheet, View, ScrollView, ActivityIndicator, Image } from "react-native";
import { Text } from "@rneui/themed";

export default function DetailScreen({ route, navigation }) {

    const { movieId } = route.params;
    console.log(movieId);
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

    var time = dataResult.runtime;

    const runtimeHours = Math.floor(time /60);
    const runtimeMins = time % 60;

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
                    {/* <Image 
                        style={styles.detailImg}
                        height={450}
                        width={300}
                        source={{ uri: "http://image.tmdb.org/t/p/w500" + dataResult.poster_path }}
                    /> */}
                    <View style={styles.titleWrap}>
                        <Text h1>{dataResult.title}</Text>
                        <Text style={styles.smallPrint}>{dataResult.release_date} {runtimeHours}h {runtimeMins}m</Text>
                    </View>
                    <View style={styles.blackBg}></View>
                    <View style={styles.descriptionWrap}>
                        <Text h4>Description</Text>
                        <Text style={styles.smallPrint}>{dataResult.overview}</Text>
                    </View>
                </View>
            </View>
        );
    } 
}

// declare the stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5EFDF",
    },
    contentWrap: {
        width: "100%",
    },
    titleWrap: {
        width: "90%",
        alignSelf: "center",
    },
    descriptionWrap: {
        width: "75%",
        alignSelf: "center",
    },
    smallPrint: {
        fontSize: 10,
    },
    blackBg: {
        width: "100%",
        height: 260,
        backgroundColor: "#232323",
    },
});