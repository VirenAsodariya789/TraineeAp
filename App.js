/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

class Greeting extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{ alignItems: "center", top: 50 }}>
        <Greeting name="ajay" />
        <Greeting name="hardik" />
        <Greeting name="ketan" />
      </View>
    );
  }
}
