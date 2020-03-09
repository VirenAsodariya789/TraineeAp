import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./pages/HomeScreen";
import AboutScreen from "./pages/AboutScreen";
import ContactScreen from "./pages/ContactScreen";

export default function App() {
  const stack = createStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="About" component={AboutScreen} />
        <stack.Screen name="Contact" component={ContactScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
