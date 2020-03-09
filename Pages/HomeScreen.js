import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 28 }}>Welcome to First page</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: 300
          }}
        >
          <Button
            title="About"
            onPress={() => {
              this.props.navigation.navigate("About");
            }}
          />
          <Button
            title="Contact"
            onPress={() => {
              this.props.navigation.navigate("Contact");
            }}
          />
        </View>
      </View>
    );
  }
}
