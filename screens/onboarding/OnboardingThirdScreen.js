import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function OnboardingThirdScreen({ navigation }) {

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


    {/* Here there is an added button that allows for the user to skip the task, and allows them to move to the next onboarding screen */}
      <TouchableOpacity
        style={styles.skipLink}
        onPress={() => navigation.navigate('Onboarding4')}
      >
        <Text style={styles.skipLinkText}>Skip for now</Text>
      </TouchableOpacity>



      <View style={styles.progBarWrap}>
        <View style={styles.progBar}></View>
        <Text style={{ fontSize:10, marginLeft:5 }}>2/4</Text>
      </View>
        

    </View>
  );
};

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
      // There are only 4 steps to the onboarding process, so on the third page we are at 50% completion
      width:"50%",
      marginBottom: 2,
  }
});
