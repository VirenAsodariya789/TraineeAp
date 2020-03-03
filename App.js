import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { material } from "react-native-typography";

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={material.display4}>Hello Material!</Text>
      </View>
    );
  }
}
