import React, { useEffect } from 'react';
import { StyleSheet, View, Button, Image } from "react-native";

export default function WelcomeScreen({ navigation }) {

        useEffect(() => {
            // Simulate a loading delay of 2 seconds
            // once the loading is done 
            const timer = setTimeout(() => {
              navigation.navigate('SignUp');
            }, 1500);
            return () => clearTimeout(timer);
          }, [navigation]);
        
          // displays the logo
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