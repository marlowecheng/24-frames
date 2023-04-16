import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, ScrollView, TouchableOpacity, Image, } from "react-native";
import { Text, Button } from "@rneui/themed";


export default function OnboardingThirdScreen({ navigation }) {


  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={require('../../assets/images/onb-screenshot-2.png')} style={styles.image} />
        <View style={styles.h4}>
          <Text style={styles.bullet}>• Find the movie you want to add</Text>
          <Text style={styles.bullet}>• Click the "Add to List" button</Text>
          <Text style={styles.bullet}>• Select the desired list</Text>
          <Text style={styles.bullet}>• The movie is now added to your list!</Text>
        </View>

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

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Onboarding4')}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>



        <View style={styles.progBar}>
          <View style={styles.progFill} />
        </View>
        <Text style={styles.progText}>2/4</Text>

      </View>
    </ScrollView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",

    backgroundColor: '#F5efdf',
    textAlign: 'left',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: 35,
  },
  h4: {
    left: 30,
  },
  bullet: {
    fontFamily:"Poppins_400Regular",
    fontWeight:"regular",
    fontSize:16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  skipLink: {
    flex: 1,
    alignSelf: 'flex-end',
    marginTop: 15,
    marginRight: 30,
  },
  skipLinkText: {
    fontSize: 12,
    color: '#56BFD9',
    textDecorationLine: 'underline',
  },

  bulletCont: {
    marginBottom: 20,
  },
  bulletItem: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 10,
    width: 350,
  },
  progBarWrap: {
    width:"100%",
  },
  progBar: {
      backgroundColor:"#56BFD9",
      height:18,
      width:"50%",
      marginBottom: 2,
  }
});
