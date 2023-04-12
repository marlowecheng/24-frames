import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Text, SearchBar } from "@rneui/themed";

import { Picker } from "@react-native-picker/picker";

import { GENREDATA } from "../data/genre-data";

import GenreSmallListItem from "../components/GenreSmallListItem";
import { getAllGenres } from "../data/genre-data";

export default function SearchScreen({ navigation }) {

    const [selectedList, setSelectedList] = useState();

    const renderItem = ({ item }) => (
        <GenreSmallListItem itemData={item} navigationRef={navigation} />
    );

    return (
        <View style={styles.container}>
            <SearchBar
                placeholder="Search Movies & People"
                // onChangeText={updateSearch}
                // value={search}
                lightTheme="false"
            />
            <View>
                <FlatList
                    style={styles.GenreList}
                    data={getAllGenres().slice(0,4)}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    scrollEnabled={false}
                />
            </View>
            <View
                style={{
                    marginTop: 15,
                    borderBottomColor: 'black',
                    borderBottomWidth: 0.75,
                    width: "90%",
                    alignSelf: "center",
            }}/>
            <View
                style={{ 
                    marginTop: 5,
                    alignSelf: 'center',
                    width:272,
                }}>
                <Text
                    style={{
                        fontSize: 10,
                    }}
                >More Genres</Text>
            </View>
            <View
                style={{ 
                    marginTop: 5,
                    backgroundColor:"#F3B646",
                    justifyContent: 'center',
                    alignSelf: 'center',
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