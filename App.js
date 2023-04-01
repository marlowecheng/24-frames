import * as React from "react";
import { StyleSheet, View, ActivityIndicator, Image } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins";

import { ThemeProvider } from "@rneui/themed";
import { framesTheme } from "./themes/framesTheme";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SearchScreen from "./screens/SearchScreen";
import ResultScreen from "./screens/ResultScreen";
import DetailScreen from "./screens/DetailScreen";
import MyListScreen from "./screens/MyListScreen";

const Stack = createNativeStackNavigator();

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
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ 
              headerTintColor: "#232323",

             }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ 
                title: "Home",

               }}
            >
            </Stack.Screen>
          </Stack.Navigator>
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
