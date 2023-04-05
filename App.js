import * as React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins";

import { ThemeProvider } from "@rneui/themed";
import { framesTheme } from "./themes/framesTheme";

import WelcomeScreen from "./screens/WelcomeScreen";
import OnboardingFirstScreen from "./screens/onboarding/OnboardingFirstScreen";
import OnboardingSecondScreen from "./screens/onboarding/OnbopardingSecondScreen";
import OnboardingThirdScreen from "./screens/onboarding/OnboardingThirdScreen";
import OnboardingFourthScreen from "./screens/onboarding/OnboardingFourthScreen";
import OnboardingFifthScreen from "./screens/onboarding/OnboardingFifthScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import TabNav from "./screens/TabNav";

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
            initialRouteName="Welcome"
           >
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{
                headerShown: false,
              }}
            /> 
            <Stack.Screen
              name="Create An Account"
              component={SignUpScreen}
            />
            <Stack.Screen
              name="Onboarding1"
              component={OnboardingFirstScreen}
            /> 
            <Stack.Screen
              name="Onboarding2"
              component={OnboardingSecondScreen}
            /> 
            <Stack.Screen
              name="Onboarding3"
              component={OnboardingThirdScreen}
            /> 
            <Stack.Screen
              name="Onboarding4"
              component={OnboardingFourthScreen}
            /> 
            <Stack.Screen
              name="Onboarding5"
              component={OnboardingFifthScreen}
            /> 
            <Stack.Screen
              name="TabNavigator"
              component={TabNav}
              options={{
                headerShown: false,
              }}
            />
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
