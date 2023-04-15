import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import GenreListItem from "../components/GenreListItem";

const WelcomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.headerone}>What's your type?</Text>
      <Text style={styles.tagline}>Pick up to 3 of your go-to genres</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Onboarding3')}
      >
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.skipLink}
        onPress={() => navigation.navigate('Onboarding2')}
      >
        <Text style={styles.skipLinkText}>Skip for now</Text>
      </TouchableOpacity>
      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>
      <Text style={styles.progressText}>1/4</Text>
    </View>
  );
};







const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#F5efdf',
  },
  headerone: {
    marginTop: 70,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    marginRight: 100,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  tagline: {
    fontSize: 18,
    marginBottom: 20,
    marginRight: 85,
  },
  button: {
    backgroundColor: '#062C3F',
    paddingHorizontal: 120,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 5,
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
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressBar: {
    height: 20,
    width: '100%',
    backgroundColor: '#F5efdf',
    // borderRadius: ,
    overflow: 'hidden',
    top: 440,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#56BFD9',
    // borderRadius: 10,
    width: '25%', // Change the width to the percentage of progress
  },
  progressText: {
    fontSize: 10,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginTop: 15,
    top: 440,
  },
  GenreList: {
    width: 400,
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "center",
},
});

export default WelcomeScreen;
