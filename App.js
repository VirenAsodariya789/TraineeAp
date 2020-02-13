/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View } from "react-native";

export default class FlexDimensionsBasic extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "red" }} />
        <View style={{ flex: 2, backgroundColor: "green" }} />
        <View style={{ flex: 3, backgroundColor: "blue" }} />
        <View style={{ flex: 4, backgroundColor: "pink" }} />
        <View style={{ flex: 5, backgroundColor: "yellow" }} />
      </View>
    );
  }
}
