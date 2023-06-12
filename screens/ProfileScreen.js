import React, {useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Image, ActivityIndicator, ScrollView } from "react-native";
import { Text } from "@rneui/themed";
import { getUserById } from "../data/user-data";

import MovieSmallListItem from "../components/MovieSmallListItem";

export default function ProfileScreen({ navigation }) {

        // gets the current user by id
        const currUser = getUserById('1');

        // sets currUser to currId
        const [currId, setCurrId] = useState(null);

        if(currUser !== currId){
            setCurrId(currUser);
        }

    return (
        // displays profile content based on user-data
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
                source={currUser.keyImage}
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

// displays want to watch movies
function displayWatchContainer(currUser, navigation) {

    // renders MovieSmallListItem component with its data
    const renderItem = ({ item }) => (
        <MovieSmallListItem itemData={item} navigationRef={navigation} />
    );

    return (
        // generates a flatlist based on the rendered item
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


// displays watched movies
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

// displays movies that has been reviewed by the user
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