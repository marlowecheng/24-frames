import React, { useState, useEffect } from "react";

import { StyleSheet, View, ScrollView, ActivityIndicator, Image, FlatList } from "react-native";
import { Text } from "@rneui/themed";
import { Picker } from "@react-native-picker/picker";
import StarRating from "react-native-star-rating-widget";
import { TextInput } from "@react-native-material/core";
import { Button } from "react-native-elements";

import ReviewListItem from "../components/ReviewListItem";
import { getAllReviews } from "../data/review-data";

export default function DetailScreen({ route, navigation }) {

    const { movieId } = route.params;
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataResult, setDataResult] = useState([]);

    const [currId, setCurrId] = useState(null);

    if(movieId !== currId){
        setCurrId(movieId);
    }

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/" + movieId + "?api_key=3636477fa6452fd3ef8c3fca44ea59ee")
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
            <ScrollView style={styles.scrollView}>
  
                {displayDataContainer(error, isLoaded, dataResult, navigation)}

                {displayReviewContainer(error, isLoaded, dataResult, navigation)}
  
            </ScrollView>
        </View>
    );

}

function displayDataContainer(error, isLoaded, dataResult, navigation) {

    var time = dataResult.runtime;

    const [selectedList, setSelectedList] = useState();

    const [rating, setRating] = useState(0);

    const runtimeHours = Math.floor(time /60);
    const runtimeMins = time % 60;

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
            <View>
                <Text>Loading...</Text>
                <ActivityIndicator size="large" color="#E63946" />
            </View>
        );
    }
    else if (dataResult === undefined) {
        // show message if no records found
        return (
            <View>
                <Text>Nothing Found.</Text>
            </View>
        );  
    }
    else {
        // show the movie poster & details
        return (
            <View 
                style={styles.listItem}
                containerStyle={{ 
                    backgroundColor:"#457B9D",
                    padding:10,
            }}>
                <View
                    style={styles.contentWrap}
                >
                    <View style={styles.titleWrap}>
                        <Text h1>{dataResult.title}</Text>
                        <Text style={styles.smallPrint}>{dataResult.release_date} {runtimeHours}h {runtimeMins}m</Text>
                    </View>
                    <View style={styles.blackBg}>
                        <Image 
                            style={styles.detailImg}
                            height={260}
                            width={173}
                            source={{ uri: "http://image.tmdb.org/t/p/w500" + dataResult.poster_path }}
                            alignSelf="center"
                            justifyContent="center"
                        />
                    </View>
                    <View 
                        style={{ 
                            marginTop: 10,
                            flexDirection:"row",
                            justifyContent:"center",
                         }}>
                        <StarRating
                            rating={rating}
                            onChange={setRating}
                            color="#F3B646"
                            starSize={14}
                        />
                        <Text
                        style={{ 
                            fontSize:10
                        }}>4.52 • 200k ratings • 2.5k user reviews</Text>
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
                    <View
                        style={{ 
                            marginTop: 10,
                            alignSelf: 'center',
                            width:140,
                        }}>
                        <Text style={{ 
                            fontSize: 10,
                         }}>Add to:</Text>
                    </View>
                    <View
                        style={{ 
                            marginTop: 5,
                            backgroundColor:"#F3B646",
                            justifyContent: 'center',
                            alignSelf: 'center',
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
                    <View 
                        style={{ 
                            marginTop: 10,
                            flexDirection:"row",
                            justifyContent:"center",
                         }}>
                        <Text
                        style={{ 
                            fontSize:10
                        }}>Rate This Movie:</Text>
                        <StarRating
                            rating={rating}
                            onChange={setRating}
                            color="#232323"
                            starSize={14}
                        />
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
                    <View style={styles.descriptionWrap}>
                        <Text h4>Description</Text>
                        <Text style={styles.smallPrint}>{dataResult.overview}</Text>
                    </View>
                    <View
                    style={styles.contentWrap}
                    >
                        <View
                            style={{
                                marginTop: 15,
                                borderBottomColor: 'black',
                                borderBottomWidth: 0.75,
                                width: "90%",
                                alignSelf: "center",
                            }}
                        />
                        <View style={styles.descriptionWrap}>
                            <Text h4>User Reviews</Text>
                            <View style={styles.input}>
                                <TextInput
                                    // onChangeText={}
                                    // value={}
                                    placeholder="Write your thoughts..."
                                    height={80}
                                />
                            </View>
                            <View
                            style={{ 
                                flexDirection:"row",
                                justifyContent:"flex-end",
                                marginBottom: 10,
                             }}    
                            >
                                <Button 
                                    title="Cancel"
                                    containerStyle={{ 
                                        width: 70,
                                        height: 30,
                                        marginLeft: 10,
                                        borderRadius: 8,
                                    }}
                                    buttonStyle={{ 
                                        backgroundColor:"#062C3F",
                                    }}
                                    titleStyle={{ 
                                        fontSize: 10,
                                    }}
                                />
                                <Button 
                                    title="Post"
                                    containerStyle={{ 
                                        width: 70,
                                        height: 30,
                                        marginLeft: 10,
                                        borderRadius: 8,
                                    }}
                                    buttonStyle={{ 
                                        backgroundColor:"#062C3F",
                                    }}
                                    titleStyle={{ 
                                        fontSize: 10,
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    } 
}

function displayReviewContainer(navigation) {

    const renderItem = ({ item }) => (
        <ReviewListItem itemData={item} navigationRef={navigation} />
    );

    return (
        <View>
            <FlatList
                style={styles.ReviewList}
                data={getAllReviews()}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                numColumns={1}
                scrollEnabled={false}
            />
        </View>
    );
}

// declare the stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5EFDF",
    },
    contentWrap: {
        width: "100%",
    },
    titleWrap: {
        width: "90%",
        alignSelf: "center",
    },
    descriptionWrap: {
        marginTop: 15,
        width: "75%",
        alignSelf: "center",
    },
    smallPrint: {
        fontSize: 10,
    },
    blackBg: {
        width: "100%",
        height: 260,
        backgroundColor: "#232323",
    },
    listPicker: {
        borderRadius: 15,
        width: 150,
        height: 50,
        alignSelf:"center",
    },
    input: {
        borderRadius: 15,
        borderColor: "#062C3F",
        borderStyle: "solid",
        borderWidth: 2,
        height: 80,
        marginTop: 5,
        marginBottom: 10,
        overflow: "hidden",
    },
    btn: {
        width: 57,
        height: 24,
        borderRadius: 8,
        marginLeft: 10,
    },
    ReviewList: {
        width: "80%",
        alignSelf: "center",
        marginTop: 15,
    },
});