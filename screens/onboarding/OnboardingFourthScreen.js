import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Image source={require('../../assets/images/onb-screenshot-3.png')} style={styles.image} />
      <View style={styles.bulletCont}>
        <Text style={styles.bulletItem}>• Quickly access your favourite movies by list or genre</Text>
        <Text style={styles.bulletItem}>• You can easily create custom lists to keep track of your favourite films or ones you want to watch in the future.</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Onboarding5')}
      >
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.skipLink}
        onPress={() => navigation.navigate('Onboarding5')}
      >
        <Text style={styles.skipLinkText}>Skip for now</Text>
      </TouchableOpacity>

      <View style={styles.progBarWrap}>
          <View style={styles.progBar}></View>
          <Text style={{ fontSize:10, marginLeft:5 }}>3/4</Text>
      </View>
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
    marginTop: 30,
  },
  tagline: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#062C3F',
    paddingHorizontal: 120,
    paddingVertical: 10,
    // marginTop: 5,
    borderRadius: 5,
    boxShadow: "1px 3px 1px #9E9E9E",
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bulletCont: {
    margin: 30,
  },
  bulletItem: {
    textAlign: 'left',
    marginBottom: 10,
    fontSize: 16,
  },
  skipLink: {
  
    alignSelf: 'flex-end',
    marginTop: 20,
    marginRight: 30,
  },
  skipLinkText: {
    fontSize: 12,
    color: '#56BFD9',
    textDecorationLine: 'underline',
  },
  progBarWrap: {
    width:"100%",
  },
  progBar: {
      backgroundColor:"#56BFD9",
      height:18,
      width:"50%",
      marginBottom: 2,
  },
});

export default WelcomeScreen;
