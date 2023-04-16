import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity, Image, ScrollView } from "react-native";
import { Text, Button } from "@rneui/themed";


export default function OnboardingFifthScreen({ navigation }) {


    return (
      <ScrollView style={styles.container}>
        <View
          style={{ 
              width:400,
              padding:10,
              alignSelf:"center",
              marginTop: 20,
          }}>
        <Text style={styles.headerone}>Let's get started</Text>
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

        <View style={styles.progBar}>
          <View style={styles.progFill} />
        </View>
        <Text style={styles.progText}>4/4</Text>
                
       </View>
     </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5EFDF",
        textAlign: 'left',
    },
    image: {
      width: '100%',
      height: 300,
      resizeMode: 'contain',
      marginBottom: 20,
      marginTop: 35,
    },
    headerone: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
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

 

