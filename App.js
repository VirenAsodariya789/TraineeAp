/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View } from "react-native";

export default class FlexDirectionBasic extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={{ width: 50, height: 50, backgroundColor: "red" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "green" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "blue" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "pink" }} />
      </View>
    );
  }
}
