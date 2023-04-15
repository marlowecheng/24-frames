import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Let's get started</Text>
      <Image source={require('../assets/onb-popcorn.png')} style={styles.image} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Text style={styles.buttonText}>CONTINUE</Text>
      </TouchableOpacity>

      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>
      <Text style={styles.progressText}>4/4</Text>

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
  header: {
    marginTop: 70,
    fontSize: 32,
    fontWeight: 'bold',
    // marginBottom: 10,
    // marginRight: 100,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 40,
    marginTop: 40,
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
    marginBottom: 30,
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
    top: 110,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#56BFD9',
    // borderRadius: 10,
    width: '100%', // Change the width to the percentage of progress
  },
  progressText: {
    fontSize: 10,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginTop: 15,
    top: 110,
  },
});

export default WelcomeScreen;
 