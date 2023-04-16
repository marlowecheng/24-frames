import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, ScrollView, TouchableOpacity, Image} from "react-native";
import { Text, Button } from "@rneui/themed";


export default function OnboardingSecondScreen({ navigation }) {

  
    return (
      <ScrollView style={styles.container}>
      <View>
        <Image source={require('../../assets/images/onb-screenshot-3.png')} style={styles.image} />
        <View style={styles.h4}>
          <Text style={styles.bullet}>• Quickly access your favourite movies by list or genres</Text>
          <Text style={styles.bullet}>• You can easily create custom lists to keep track of your favourite films or ones you want to watch in the future.</Text>
        </View>

        <View
          style={{ 
            flex: 1,
            marginTop: 50,
            marginBottom: 30,
            width:272,
            alignSelf:"center",
            borderRadius:8,
          }}>
            <Button
              title={"NEXT"}
              onPress={() => navigation.navigate('Onboarding5')}
            />

            <TouchableOpacity
              style={styles.skipLink}
              onPress={() => navigation.navigate('Onboarding5')}
            >
              <Text style={styles.skipLinkText}>Skip for now</Text>
            </TouchableOpacity>
                  

        </View>


        <View style={styles.progBar}>
          <View style={styles.progFill} />
        </View>
        <Text style={styles.progText}>3/4</Text>


        

      </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5EFDF",
    },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: 35,
  },
  h4: {
    left: 30,
  },
  bullet: {
    fontFamily:"Poppins_400Regular",
    fontWeight:"regular",
    fontSize:16,
    width: '85%',
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
  progBar: {
    height: 20,
    width: '100%',
    backgroundColor: '#F5efdf',
    overflow: 'hidden',
  },
  progFill: {
    height: '100%',
    backgroundColor: '#56BFD9',
    width: '75%', 
  },
  progText: {
    fontSize: 10,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginTop: 15,
  },
});