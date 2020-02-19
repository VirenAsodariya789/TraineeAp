/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import { View } from "react-native";

export default class FlexWrapDemo extends Component {
  render() {
    return (
      // Align Content Demo
      // Properties Align Content:'flex-start'| 'flex-end' | 'stretch' | 'space-between'|'space-around'

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          alignContent: "center"
        }}
      >
        <View
          style={{
            height: 100,
            width: 50,
            backgroundColor: "orange",
            borderWidth: 1,
            marginBottom: 5
          }}
        />
        <View
          style={{
            height: 100,
            width: 50,
            backgroundColor: "red",
            borderWidth: 1,
            marginBottom: 5
          }}
        />
        <View
          style={{
            height: 100,
            width: 50,
            backgroundColor: "red",
            borderWidth: 1,
            marginBottom: 5
          }}
        />
        <View
          style={{
            height: 100,
            width: 50,
            backgroundColor: "blue",
            borderWidth: 1,
            marginBottom: 5
          }}
        />
        <View
          style={{
            height: 100,
            width: 50,
            backgroundColor: "pink",
            borderWidth: 1,
            marginBottom: 5
          }}
        />
        <View
          style={{
            height: 100,
            width: 50,
            backgroundColor: "black",
            borderWidth: 1,
            marginBottom: 5
          }}
        />
        <View
          style={{
            height: 100,
            width: 50,
            backgroundColor: "yellow",
            borderWidth: 1,
            marginBottom: 5
          }}
        />
        <View
          style={{
            height: 100,
            width: 50,
            backgroundColor: "green",
            borderWidth: 1,
            marginBottom: 5
          }}
        />
        <View
          style={{
            height: 100,
            width: 50,
            backgroundColor: "black",
            borderWidth: 1,
            marginBottom: 5
          }}
        />

        <View
          style={{
            height: 100,
            width: 50,
            backgroundColor: "aqua",
            borderWidth: 1,
            marginBottom: 5
          }}
        />

        <View
          style={{
            height: 100,
            width: 50,
            backgroundColor: "teal",
            borderWidth: 1,
            marginBottom: 5
          }}
        />

        <View
          style={{
            height: 100,
            width: 50,
            backgroundColor: "navy",
            borderWidth: 1,
            marginBottom: 5
          }}
        />

        <View
          style={{
            height: 100,
            width: 50,
            backgroundColor: "purple",
            borderWidth: 1,
            marginBottom: 5
          }}
        />

        <View
          style={{
            height: 100,
            width: 50,
            backgroundColor: "chocolate",
            borderWidth: 1,
            marginBottom: 5
          }}
        />
      </View>
    );
  }
}
