import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class AboutScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 28 }}>Welcome to First page</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: 350
          }}
        >
          <Button
            title="Home"
            onPress={() => {
              this.props.navigation.navigate("Home");
            }}
          />

          <Button
            title="Contact"
            onPress={() => {
              this.props.navigation.navigate("Contact");
            }}
          />

          <Button
            title="Back"
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
          <Button
            title="Back to Home"
            onPress={() => {
              this.props.navigation.popToTop();
            }}
          />
        </View>
      </View>
    );
  }
}
