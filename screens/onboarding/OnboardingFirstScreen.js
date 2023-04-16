import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function OnboardingFirstScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.headerone}>Welcome to</Text>
      <Text style={styles.headertwo}>24 Frames</Text>
      <Image source={require('../../assets/images/pl-film.png')} style={styles.image} />
      <Text style={styles.tagline}>Let us be your personal movie guide</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Onboarding2')}
      >
        <Text style={styles.buttonText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5efdf',
  },
  headerone: {
    marginTop: 70,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    marginRight: 100,
  },
  headertwo: {
    alignItems: 'center',
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 20,
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
});
