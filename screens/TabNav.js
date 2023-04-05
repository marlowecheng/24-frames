import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import Ionicons from "react-native-vector-icons/Ionicons"

import { ThemeProvider } from "@rneui/themed";
import { framesTheme } from "../themes/framesTheme";

import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import ResultScreen from "./ResultScreen";
import DetailScreen from "./DetailScreen";
import MyListScreen from "./MyListScreen";
import ProfileScreen from "./ProfileScreen";
import MoreScreen from "./MoreScreen";

const Tab = createBottomTabNavigator();

export default function TabNav() {

    return (
          <Tab.Navigator 
            initialRouteName="Home"
            screenOptions={{ 
              headerStyle: {
                backgroundColor: "#F5EFDF"
              },
              headerTintColor: "#232323",
              tabBarStyle: {
                backgroundColor: "#F5EFDF",
                height: 70,
              },
              tabBarIconStyle: {
                color: "red",
              }
            }}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{ 
                tabBarIcon: () => {
                  return <Ionicons name="home" size={40} color={"#062C3F"}/>;
                },
              }}
            />
            <Tab.Screen
              name="MyMovies"
              component={MyListScreen}
              options={{ 
                title: "My Movies",
                tabBarIcon: () => {
                  return <Ionicons name="film" size={40} color={"#062C3F"}/>
                },
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{ 
                tabBarIcon: () => {
                  return <Ionicons name="person" size={40} color={"#062C3F"}/>
                },
              }}
            />
            <Tab.Screen
              name="Search"
              component={SearchScreen}
              options={{ 
                tabBarIcon: () => {
                  return <Ionicons name="search" size={40} color={"#062C3F"}/>
                },
              }}
            />
            <Tab.Screen
              name="More"
              component={MoreScreen}
              options={{ 
                tabBarIcon: () => {
                  return <Ionicons name="menu" size={40} color={"#062C3F"}/>
                },
              }}
            />
          </Tab.Navigator>
    )
}