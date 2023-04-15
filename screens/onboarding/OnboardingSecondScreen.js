import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import { Text, Button } from "@rneui/themed";
// import { Button } from "react-native-elements";

import GenreOnboardItem from "../../components/GenreOnboardItem";
import { getAllGenres } from "../../data/genre-data";


export default function OnboardingSecondScreen({ navigation }) {

    const [selectedList, setSelectedList] = useState();

    const renderItem = ({ item }) => (
        <GenreOnboardItem itemData={item} navigationRef={navigation} />
    );

    return (
        <ScrollView style={styles.container}>
            <View
                style={{ 
                    width:400,
                    padding:10,
                    alignSelf:"center",
                }}>
                <Text h1>
                    What's your type?
                </Text>
                <Text>
                    Pick up to 3 of your go-to genres.
                </Text>
            </View>
            
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
            <View
                style={{ 
                    flex: 1,
                    marginTop: 100,
                    marginBottom: 100,
                    width:272,
                    alignSelf:"center",
                    borderRadius:8,
                }}>
                <Button
                    title={"NEXT"}
                    onPress={() => navigation.navigate('Onboarding3')}
                />
            </View>
            <View style={styles.progBarWrap}>
                <View style={styles.progBar}></View>
                <Text style={{ fontSize:10, marginLeft:5 }}>1/4</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5EFDF",
    },
    MovieList: {},
    GenreList: {},
});