import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, ScrollView, TouchableOpacity, } from "react-native";
import { Text, Button } from "@rneui/themed";

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
                    marginTop: 20,
                }}>
                <Text h1 style={styles.headerOne}>
                    What's your type?
                </Text>
                <Text subhead>
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
                <TouchableOpacity
                    style={styles.skipLink}
                    onPress={() => navigation.navigate('Onboarding3')}
                >
        <Text style={styles.skipLinkText}>Skip for now</Text>
      </TouchableOpacity>
            </View>
            
            <View style={styles.progBarWrap}>
                <View style={styles.progBar}></View>
                <Text style={styles.progText}>1/4</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5EFDF",
    },
    GenreList: {
        width: 400,
        marginTop: 50,
        flexDirection: "row",
        flexWrap: "wrap",
        alignSelf: "center",
    },
    skipLink: {
  
        alignSelf: 'flex-end',
        marginTop: 30,
        marginRight: 10,
      },
      skipLinkText: {
        fontSize: 12,
        color: '#56BFD9',
        textDecorationLine: 'underline',
      },
    progBarWrap: {
        width:"100%",
    },
    progBar: {
        backgroundColor:"#56BFD9",
        height:18,
        width:"25%",
        marginBottom: 3,
    },
    progText: {
        fontSize: 10,
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginLeft: 30,
        marginTop: 10,
        marginBottom: 10,
        // top: 55,
      },
});