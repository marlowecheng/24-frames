import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, ScrollView, TouchableOpacity, Image, } from "react-native";
import { Text, Button } from "@rneui/themed";


export default function OnboardingThirdScreen({ navigation }) {


    return (
        <ScrollView style={styles.container}>
            <View>
        <Image source={require('../../assets/images/onb-screenshot-2.png')} style={styles.image} />
        <View style={styles.displayTitle}>
        <Text style={styles.displayTitle}>• Find the movie you want to add</Text>
        <Text displayTitle>• Click the "Add to List" button</Text>
        <Text style={styles.bulletItem}>• Select the desired list</Text>
        <Text style={styles.bulletItem}>• The movie is now added to your list!</Text>
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
                <View>

      <TouchableOpacity
        style={styles.skipLink}
        onPress={() => navigation.navigate('Onboarding4')}
      >
        <Text style={styles.skipLinkText}>Skip for now</Text>
      </TouchableOpacity>
      </View>



      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>
      <Text style={styles.progressText}>2/4</Text>
        

    </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
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
  tagline: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#062C3F',
    paddingHorizontal: 120,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 5,
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
  bulletCont: {
    marginBottom: 20,
  },
  bulletItem: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 10,
    width: 350,
  },
  progBar: {
    marginTop: 20,
    height: 20,
    width: '100%',
    backgroundColor: '#F5efdf',
    overflow: 'hidden',
    top: 85,
  },
  progFill: {
    height: '100%',
    backgroundColor: '#56BFD9',
    width: '50%', 
  },
  progText: {
    fontSize: 10,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginTop: 15,
    top: 85,
  },
});