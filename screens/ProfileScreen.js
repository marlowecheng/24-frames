import React, {useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Image, ActivityIndicator, ScrollView } from "react-native";
import { Text } from "@rneui/themed";
import { getUserById } from "../data/user-data";

import MovieSmallListItem from "../components/MovieSmallListItem";

export default function ProfileScreen({ navigation }) {

        const [visibleAlert, setVisibleAlert] = useState(false);

        const currUser = getUserById('1');

        // add the three useState for the fetch process
        // const [error, setError] = useState(null);
        // const [isLoaded, setIsLoaded] = useState(false);
        // const [dataResult, setDataResult] = useState([]);
    
        // add useEffect for the fetch process
        // useEffect(() => {
        //   fetch("https://api.themoviedb.org/3/movie/?api_key=3636477fa6452fd3ef8c3fca44ea59ee&language=en-US")
        //     .then(res => res.json())
        //     .then(
        //       (result) => {
        //         // successful load
        //         setIsLoaded(true);
        //         setDataResult(result);
        //       },
        //       (error) => {
        //         // handle errors here
        //         setIsLoaded(true);
        //         setError(error);
        //       }
        //     )
        // }, []);


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
                source={currUser.userImage}
                />
                <Text h3>{currUser.userName}</Text>
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
                >{currUser.about}</Text>
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
                {displayWatchContainer(currUser, navigation)}
                {displaySeenContainer(currUser, navigation)}
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
                    marginLeft:30,
                    justifyContent:"center",
                    alignSelf:"flex-start",
                }}
            >
                {displayReviewContainer(currUser, navigation)}
            </View>
        </ScrollView>
    );
}

function displayWatchContainer(currUser, navigation) {

    const renderItem = ({ item }) => (
        <MovieSmallListItem itemData={item} navigationRef={navigation} />
    );

    return (
        <View>
            <FlatList
                style={styles.MovieList}
                data={currUser.watchList.slice(0,1)}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                scrollEnabled={false}
            />
        </View>
    );
}



function displaySeenContainer(currUser, navigation) {

    const renderItem = ({ item }) => (
        <MovieSmallListItem itemData={item} navigationRef={navigation} />
    );

    return (
        <View>
            <FlatList
                style={styles.MovieList}
                data={currUser.seenList.slice(0,1)}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                scrollEnabled={false}
            />
        </View>
    );
}

function displayReviewContainer(currUser, navigation) {

    const renderItem = ({ item }) => (
        <MovieSmallListItem itemData={item} navigationRef={navigation} />
    );
    
    return (
        <View>
            <FlatList
                style={styles.MovieList}
                data={currUser.reviewList.slice(0,1)}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                scrollEnabled={false}
                numColumns={2}
            />
        </View>
    );
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