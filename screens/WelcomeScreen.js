import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from "react-native";

export default function WelcomeScreen({ navigation }) {

    useEffect(() => {
        // Simulate a loading delay of 2 seconds
        const timer = setTimeout(() => {
          navigation.navigate('LogIn');
        }, 1500);
        return () => clearTimeout(timer);
      }, [navigation]);
    
      return (
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