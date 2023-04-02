import * as React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useFonts } from "expo-font";
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins";

import Icon from "react-native-ionicons";
import Ionicons from "react-native-vector-icons/Ionicons"

import { ThemeProvider } from "@rneui/themed";
import { framesTheme } from "./themes/framesTheme";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SearchScreen from "./screens/SearchScreen";
import ResultScreen from "./screens/ResultScreen";
import DetailScreen from "./screens/DetailScreen";
import MyListScreen from "./screens/MyListScreen";
import ProfileScreen from "./screens/ProfileScreen";
import MoreScreen from "./screens/MoreScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#56BFD9"/>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={framesTheme}>
        <NavigationContainer>
          <Tab.Navigator 
            initialRouteName="Home"
            screenOptions={{ 
              headerStyle: {
                backgroundColor: "#F5EFDF"
              },
              headerTintColor: "#232323",
              tabBarStyle: {
                backgroundColor: "#F5EFDF",
                height: 80,
              },
            }}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{ 
                tabBarIcon: () => {
                  return <Ionicons name="home" size={40}/>;
                },
              }}
            >
            </Tab.Screen>
            <Tab.Screen
              name="MyMovies"
              component={MyListScreen}
              options={{ 
                title: "My Movies",
                tabBarIcon: () => {
                  return <Ionicons name="film" size={40}/>
                },
              }}
            >
            </Tab.Screen>
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{ 
                tabBarIcon: () => {
                  return <Ionicons name="person" size={40}/>
                },
              }}
            >
            </Tab.Screen>
            <Tab.Screen
              name="Search"
              component={SearchScreen}
              options={{ 
                tabBarIcon: () => {
                  return <Ionicons name="search" size={40}/>
                },
              }}
            >
            </Tab.Screen>
            <Tab.Screen
              name="More"
              component={MoreScreen}
              options={{ 
                tabBarIcon: () => {
                  return <Ionicons name="menu" size={40}/>
                },
              }}
            >
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  )

  
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
});
