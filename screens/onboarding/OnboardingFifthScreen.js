import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Let's get started</Text>
      <Image source={require('../../assets/images/onb-popcorn.png')} style={styles.image} />

      <View
        style={{ 
          flex: 1,
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TabNavigator')}
        >
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.progBarWrap}>
        <View style={styles.progBar}></View>
        <Text style={{ fontSize:10, marginLeft:5 }}>4/4</Text>
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
  progBarWrap: {
    width:"100%",
  },
  progBar: {
      backgroundColor:"#56BFD9",
      height:18,
      width:"100%",
      marginBottom: 2,
  }
});

export default WelcomeScreen;
 