import React, {useState, useEffect } from "react";

import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import { Text } from "@rneui/themed";

import MovieListItem from "../components/MovieListItem";

export default function HomeScreen({ route, navigation }) {

    const { genreId } = route.params;

    // add the three useState for the fetch process
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataResult, setDataResult] = useState([]);

    const [currId, setCurrId] = useState(null);

    if(genreId !== currId){
        setCurrId(genreId);
    }

    // add useEffect for the fetch process
    useEffect(() => {
      fetch("https://api.themoviedb.org/3/discover/movie?api_key=3636477fa6452fd3ef8c3fca44ea59ee&with_genres=" + genreId)
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
    }, [currId]);

    return (
        <View style={styles.container}>
            
            {displayDataContainer(error, isLoaded, dataResult, navigation)}

        </View>

    );
}

function displayDataContainer(error, isLoaded, dataResult, navigation) {

    const renderItem = ({ item }) => (
        <MovieListItem itemData={item} navigationRef={navigation} />
    );

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
            <View style={styles.loadingContainer}>
                <Text>Loading...</Text>
                <ActivityIndicator size="large" color="#56BFD9"/>
            </View>
        );
    }
    else if (dataResult.results === undefined) {
        // no records found
        return (
            <View>
                <Text>Nothing found.</Text>
            </View>
        );  
    }
    else {
        return (
            <View>
                <FlatList
                    style={styles.MovieList}
                    data={dataResult.results}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    } 
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: "#F5EFDF",
    },
    MovieList: {
        width: 400,
        height: "100%",
        alignSelf: "center",
        backgroundColor: "#F5EFDF",
        marginBottom: 10,
    },
    GenreList: {
        width: 400,
        flexDirection: "row",
        flexWrap: "wrap",
        alignSelf: "center",
    },
});