import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator, ScrollView } from "react-native";
import { Text } from "@rneui/themed";

import { getUserById } from "../data/user-data";

import { Picker } from "@react-native-picker/picker";

import { GENREDATA } from "../data/genre-data";

import MovieUserListItem from "../components/MovieUserListItem";

export default function SearchScreen({ navigation }) {

    const currUser = getUserById('1');

    const [selectedList, setSelectedList] = useState();

    // // add the three useState for the fetch process
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [dataResult, setDataResult] = useState([]);

    // // add useEffect for the fetch process
    // useEffect(() => {
    //   fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=3636477fa6452fd3ef8c3fca44ea59ee")
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
        <View style={styles.container}>
            <View
                style={{ 
                    marginTop: 5,
                    backgroundColor:"#F3B646",
                    justifyContent: 'center',
                    margin: 15,
                    width:272,
                    height: 39,
                    borderRadius:8,
                    overflow:"hidden",
            }}>
                <Picker
                    itemStyle={{height: 50, transform:[{scaleX: 0.8},{scaleY: 0.8}]}}
                    selectedValue={selectedList}
                    onValueChange={(itemValue, itemIndex) =>{
                        navigation.navigate("Results", {genreId: itemValue})
                    }}>
                        <Picker.Item
                        style={{ 
                            fontSize:10
                        }}
                        label="Pick a Genre."
                        value="Pick"
                        />
                        { GENREDATA.map((c) => <Picker.Item key={c.genreId} label={c.name} value={c.genreId} style={{ fontSize:10}} />)}
                </Picker>
            </View>
            <View
                style={{ 
                    marginTop: 5,
                    backgroundColor:"#F3B646",
                    justifyContent: 'center',
                    margin: 15,
                    width:150,
                    height: 39,
                    borderRadius:8,
                    overflow:"hidden",
                }}>
                <Picker
                    style={[styles.listPicker, {
                    }]}
                    itemStyle={{height: 50, transform:[{scaleX: 0.8},{scaleY: 0.8}]}}
                    selectedValue={selectedList}
                    onValueChange={(itemValue, itemIndex) => 
                        setSelectedList(itemValue)
                    }>
                    <Picker.Item
                        style={{ 
                            fontSize:10
                        }}
                        label="Pick a list."
                        value="Pick"
                    />
                    <Picker.Item
                        style={{ 
                            fontSize:10
                        }}
                        label="My Watch List"
                        value="WatchList"
                    />
                    <Picker.Item
                        style={{ 
                            fontSize:10
                        }}
                        label="My Favorites"
                        value="Favorites"
                    />
                    <Picker.Item
                        style={{ 
                            fontSize:10
                        }}
                        label="Watched"
                        value="Watched"
                    />
                </Picker>
            </View>
            <ScrollView>
                {displayDataContainer(currUser, navigation)}
            </ScrollView>
        </View>
    );
}

function displayDataContainer(currUser, navigation) {

    const renderItem = ({ item }) => (
        <MovieUserListItem itemData={item} navigationRef={navigation} />
    );

    return (
        <View>
            <FlatList
                style={styles.MovieList}
                data={currUser.watchList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
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
    GenreList: {
        width: 400,
        flexDirection: "row",
        flexWrap: "wrap",
        alignSelf: "center",
    },
});