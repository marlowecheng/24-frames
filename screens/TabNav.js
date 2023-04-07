import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons"

import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import MyListScreen from "./MyListScreen";
import ProfileScreen from "./ProfileScreen";
import MoreScreen from "./MoreScreen";
import ResultScreen from "./ResultScreen";
import DetailScreen from "./DetailScreen";

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
            <Tab.Screen
              name="Results"
              component={ResultScreen}
              options={{
                tabBarButton: () => null,
                title: "Genre Goes Here"
              }}
            />
            {/* <Tab.Screen
              name="Details"
              component={DetailScreen}
              options={{
                tabBarButton: () => null,
              }}
            /> */}
        </Tab.Navigator>
    )
}