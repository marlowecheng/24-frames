import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity, Image, ScrollView } from "react-native";
import { Text, Button } from "@rneui/themed";


export default function OnboardingFifthScreen({ navigation }) {


    return (
      <ScrollView style={styles.container}>
            <View
                style={{ 
                    width:400,
                    padding:10,
                    alignSelf:"center",
                    marginTop: 20,
                }}>
                <Text style={styles.headerone}>Let's get started</Text>
      <Image source={require('../../assets/images/onb-popcorn.png')} style={styles.image} />
      <View
          style={{ 
            flex: 1,
            marginTop: 50,
            marginBottom: 30,
            width:272,
            alignSelf:"center",
            borderRadius:8,
          }}>
            <Button
              title={"NEXT"}
              onPress={() => navigation.navigate('Onboarding4')}
            />

            <TouchableOpacity
              style={styles.skipLink}
              onPress={() => navigation.navigate('Onboarding4')}
            >
              <Text style={styles.skipLinkText}>Skip for now</Text>
            </TouchableOpacity>
                  

        </View>

        <View style={styles.progBar}>
          <View style={styles.progFill} />
        </View>
        <Text style={styles.progText}>4/4</Text>
                
                </View>
                </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5EFDF",
        textAlign: 'left',
    },
    image: {
      width: '100%',
      height: 300,
      resizeMode: 'contain',
      marginBottom: 20,
      marginTop: 35,
    },
    headerone: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    skipLink: {
      alignSelf: 'flex-end',
      marginTop: 15,
      marginRight: 30,
    },
    skipLinkText: {
      fontSize: 12,
      color: '#56BFD9',
      textDecorationLine: 'underline',
    },
    progBar: {
      height: 20,
      width: '100%',
      backgroundColor: '#F5efdf',
      overflow: 'hidden',
    },
    progFill: {
      height: '100%',
      backgroundColor: '#56BFD9',
      width: '100%', 
    },
    progText: {
      fontSize: 10,
      textAlign: 'left',
      alignSelf: 'flex-start',
      marginLeft: 30,
      marginTop: 15,
    },
});