import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Image source={require('../../assets/images/onb-screenshot-2.png')} style={styles.image} />
        <View style={styles.bulletCont}>
        <Text style={styles.bulletItem}>• Find the movie you want to add</Text>
        <Text style={styles.bulletItem}>• Click the "Add to List" button</Text>
        <Text style={styles.bulletItem}>• Select the desired list</Text>
        <Text style={styles.bulletItem}>• The movie is now added to your list!</Text>
        </View>



        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Onboarding4')}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.skipLink}
        onPress={() => navigation.navigate('Onboarding4')}
      >
        <Text style={styles.skipLinkText}>Skip for now</Text>
      </TouchableOpacity>



      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>
      <Text style={styles.progressText}>2/4</Text>
        

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  progressBar: {
    marginTop: 20,
    height: 20,
    width: '100%',
    backgroundColor: '#F5efdf',
    overflow: 'hidden',
    top: 85,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#56BFD9',
    width: '50%', 
  },
  progressText: {
    fontSize: 10,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginTop: 15,
    top: 85,
  },
});

export default WelcomeScreen;
