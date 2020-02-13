/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View } from "react-native";

export default class FixedDimensionsBasic extends Component {
  render() {
    return (
      <View>
        <View style={{ width: 50, height: 50, backgroundColor: "#f44336" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "#9c27b0" }} />
        <View style={{ width: 150, height: 150, backgroundColor: "#009688" }} />
        <View style={{ width: 200, height: 200, backgroundColor: "#8bc34a" }} />
        <View style={{ width: 300, height: 300, backgroundColor: "#541777" }} />
      </View>
    );
  }
}
