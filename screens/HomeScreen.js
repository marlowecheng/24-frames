import React, {useState, useEffect } from "react";

import { StyleSheet, View, ScrollView, FlatList, ActivityIndicator } from "react-native";
import { Text, SearchBar } from "@rneui/themed";

import MovieListItem from "../components/MovieListItem";
import GenreListItem from "../components/GenreListItem";
import { getAllGenres } from "../data/genre-data";

export default function HomeScreen({ navigation }) {

    state = {
        search: '',
    };
    
    // updates the search api using user-entered strings
    updateSearch = (search) => {
        this.setState({ search });
    };

    // throws the user-entered string into the search const
    const { search } = this.state;

    // add the three useState for the fetch process
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataResult, setDataResult] = useState([]);

    // putting in the search string into the search API call
    const getSearchResult = "https://api.themoviedb.org/3/search/multi?api_key=3636477fa6452fd3ef8c3fca44ea59ee&language=en-US&query=" + search + "&page=1&include_adult=false";
    const encodedURL = encodeURI(getSearchResult)

    // console.log(search);

    // const for the API call for trending movies
    const getTrending = "https://api.themoviedb.org/3/trending/movie/day?api_key=3636477fa6452fd3ef8c3fca44ea59ee";

    // add useEffect for the fetch process
    useEffect(() => {
      fetch(getTrending)
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


    // shows the search bar
    return (
        <View style={styles.container}>
            <SearchBar
                placeholder="Search Movies & People"
                // onChangeText={this.updateSearch}
                value={search}
                lightTheme="false"
            />
            <ScrollView>
            
                {displayDataContainer(error, isLoaded, dataResult, navigation)}

                {displayGenreContainer(error, isLoaded, dataResult, navigation)}

            </ScrollView>
        </View>
    );
}

function displayDataContainer(error, isLoaded, dataResult, navigation) {

    // renders the movie list item
    const renderItem = ({ item }) => (
        <MovieListItem itemData={item} navigationRef={navigation} />
    );

    if (error) {
        // if there's an error show error message   
        return (
            <View>
                <Text>Error: {error.message}</Text>
            </View>
        );
    }
    
    else if (!isLoaded) {
        //if it's loading, show spinner while loading
        return(
            <View style={styles.loadingContainer}>
                <Text>Loading...</Text>
                <ActivityIndicator size="large" color="#56BFD9"/>
            </View>
        );
    }
    else if (dataResult.results === undefined) {
        // if there's no records found
        return (
            <View>
                <Text>Nothing found.</Text>
            </View>
        );  
    }
    else {
        // otherwise, returns the list of movies
        return (
            <View>
                <FlatList
                    style={styles.MovieList}
                    data={dataResult.results.slice(0,2)}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    scrollEnabled={false}
                />
            </View>
        );
    } 
}

function displayGenreContainer(navigation) {

    // renders the genrelistitem
    const renderItem = ({ item }) => (
        <GenreListItem itemData={item} navigationRef={navigation} />
    );
    
    // using the GenreListItem component, the flatlist displays a list of genres
    // the data comes from genre-data
    return (
        <View>
            <FlatList
                style={styles.GenreList}
                data={getAllGenres()}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                scrollEnabled={false}
            />
        </View>
    );
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
        height: "90%",
        backgroundColor: "#F5EFDF",
    },
    MovieList: {
        width: 400,
        height: 500,
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