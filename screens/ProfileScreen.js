import React, {useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Image, ActivityIndicator, ScrollView } from "react-native";
import { Text } from "@rneui/themed";
import { Avatar } from "react-native-elements"
import { getUserById } from "../data/user-data";

import MovieSmallListItem from "../components/MovieSmallListItem";

export default function ProfileScreen({ itemData, navigation }) {

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


    return (
        <ScrollView style={styles.container}>
            <View
                style={{ 
                    marginRight: 15,
                    alignItems:"center",
                    justifyContent:"center",
                }}>
                <Image
                width={194}
                height={194}
                source={require('../assets/images/user1.png')}
                />
                <Text h3>Gyan Rosling</Text>
            </View> 
            <View
                style={{
                    marginTop: 15,
                    borderBottomColor: 'black',
                    borderBottomWidth: 0.75,
                    width: "90%",
                    alignSelf: "center",
                }}
            />
            <View style={styles.aboutMe}>
                <Text h3>About Me</Text>
                <Text
                    style={{
                        fontSize: 10,
                    }}
                >Hey! I’m a movie lover who ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed felis in massa vestibulum egestas. ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed felis in massa vestibulum egestas. ipsum dolor sit amet!</Text>
            </View>
            <View
                style={{
                    marginTop: 15,
                    borderBottomColor: 'black',
                    borderBottomWidth: 0.75,
                    width: "90%",
                    alignSelf: "center",
                }}
            />
            <View style={styles.aboutMe}>
                <Text h3>My Movie Lists</Text>
            </View>
            <View
                style={{
                    flexDirection:"row",
                    justifyContent:"center",
                }}
            >
                {displayWatchContainer(error, isLoaded, dataResult, navigation)}
                {displaySeenContainer(error, isLoaded, dataResult, navigation)}
            </View>
            <View
                style={{
                    marginTop: 15,
                    borderBottomColor: 'black',
                    borderBottomWidth: 0.75,
                    width: "90%",
                    alignSelf: "center",
                }}
            />
            <View style={styles.aboutMe}>
                <Text h3>Recent Reviews</Text>
            </View>
            <View
                style={{
                    justifyContent:"center",
                    alignSelf:"center",
                }}
            >
                {displayReviewContainer(error, isLoaded, dataResult, navigation)}
            </View>
        </ScrollView>
    );
}

function displayWatchContainer(error, isLoaded, dataResult, navigation) {

    const renderItem = ({ item }) => (
        <MovieSmallListItem itemData={item} navigationRef={navigation} />
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
                    data={dataResult.results.slice(0,1)}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    scrollEnabled={false}
                />
            </View>
        );
    } 
}

function displaySeenContainer(error, isLoaded, dataResult, navigation) {

    const renderItem = ({ item }) => (
        <MovieSmallListItem itemData={item} navigationRef={navigation} />
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
                    data={dataResult.results.slice(0,1)}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    scrollEnabled={false}
                />
            </View>
        );
    } 
}

function displayReviewContainer(error, isLoaded, dataResult, navigation) {

    const renderItem = ({ item }) => (
        <MovieSmallListItem itemData={item} navigationRef={navigation} />
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
                    data={dataResult.results.slice(0,2)}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    scrollEnabled={false}
                    numColumns={2}
                />
            </View>
        );
    } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5EFDF",
    },
    aboutMe: {
        marginTop: 10,
        width: 312,
        alignSelf: "center",
    },
});