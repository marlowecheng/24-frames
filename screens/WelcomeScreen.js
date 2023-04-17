import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from "react-native";

export default function WelcomeScreen({ navigation }) {

  // Here we set a timer to display the screen for x amount of time, before it automatically moves to the login page
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LogIn');
    }, 1500);
    // Here is the timer for 1500, so the delay put on the loading screen is 1.5 seconds before it moves to the next page
    return () => clearTimeout(timer);
  }, [navigation]);

    return (
      // This is what the loading screen will display during the 1.5 seconds
      <View style={styles.container}> 
      <Image source={require('../assets/images/24Frames_Logo.png')} style={styles.image}resizeMode='contain'/>
      </View>
    );
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5EFDF",
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        alignItems: 'center',
        width: '85%',
        height: '85%',
    },

});