import React, {useState, useEffect } from "react";

import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import { Text } from "@rneui/themed";

import MovieListItem from "../components/MovieListItem";

// import { getAllGenres } from "../data/genre-data";
// import { GenreListItem } from "../components/GenreListItem";

export default function HomeScreen({ navigation }) {

    // add the three useState for the fetch process
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataResult, setDataResult] = useState([]);

    // add useEffect for the fetch process
    useEffect(() => {
      fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=3636477fa6452fd3ef8c3fca44ea59ee")
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

    // const renderItem = ({ genre }) => (
    //     <GenreListItem itemData={genre} navigationRef={navigation}/>
    // );

    return (
        <View style={styles.container}>
            
            {displayDataContainer(error, isLoaded, dataResult, navigation)}

            {/* <View>
                <FlatList
                    style={styles.GenreList}
                    data={getAllGenres()}
                    renderItem={renderItem}
                    keyExtractor={genre => genre.id}
                />
            </View> */}
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
        width: "98%",
        height: "66%",
        alignSelf: "center",
        backgroundColor: "#F5EFDF",
    },
    GenreList: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
    },
});