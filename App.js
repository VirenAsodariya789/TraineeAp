/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import { View } from "react-native";

export default class AlignSelfDemo extends Component {
  render() {
    return (
      // Align Self Demo
      // Properties 'flex-start'
      //             'flex-end'
      //              'center'
      //              'stretch'

      <View style={{ flex: 1, justifyContent: "center" }}>
        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: "red"
          }}
        />
        <View style={{ height: 50, width: 100, backgroundColor: "black" }} />
        <View
          style={{
            height: 50,
            width: 50,
            alignSelf: "flex-end",
            backgroundColor: "green"
          }}
        />
        <View
          style={{
            height: 50,
            width: 50,
            alignSelf: "center",
            backgroundColor: "blue"
          }}
        />
      </View>
    );
  }
}
