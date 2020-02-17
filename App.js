/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import { View } from "react-native";

export default class AlignItemsBasics extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch"
        }}
      >
        <View style={{ height: 50, backgroundColor: "red" }} />
        <View style={{ height: 50, backgroundColor: "green" }} />
        <View style={{ height: 100, backgroundColor: "blue" }} />
      </View>
    );
  }
}
