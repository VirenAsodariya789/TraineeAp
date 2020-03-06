import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button, ThemeProvider, Header, icon } from "react-native-elements";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import AppNavigator from "./navigator/appNavigator";

export default class HelloWorldApp extends Component {
  render() {
    return <AppNavigator />;
  }
}
