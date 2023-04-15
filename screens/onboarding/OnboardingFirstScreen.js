import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity, Image, ScrollView } from "react-native";
import { Text, Button } from "@rneui/themed";


export default function OnboardingFirstScreen({ navigation }) {


    return (
      <ScrollView style={styles.container}>
            <View
                style={{ 
                    width:400,
                    padding:10,
                    alignSelf:"center",
                    marginTop: 20,
                }}>
                <Text style={styles.headerone}>
                    Welcome to 
                </Text>
                <Text style={styles.headertwo}>
                    24 Frames
                </Text>
                <Image source={require('../../assets/images/pl-film.png')} style={styles.image} />
                <Button
                    title={"NEXT"}
                    onPress={() => navigation.navigate('Onboarding2')}
                />
                
                </View>
                </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5EFDF",
    },
    headerone: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'left',
      left: 50,
    },
    headertwo: {
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    image: {
      width: '100%',
      height: 300,
      resizeMode: 'contain',
      marginBottom: 20,
    },
});