/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Image, Text, View } from "react-native";

export default class App extends Component {
  render() {
    //React native card view example

    return (
      <View
        style={{ width: 200, height: 200, flexDirection: "row", margin: 24 }}
      >
        <Image
          style={{ width: 200, height: 200, position: "absolute" }}
          source={{
            uri: "https://www.dike.lib.ia.us/images/sample-1.jpg/image"
          }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            alignSelf: "flex-end"
          }}
        >
          <Text style={{ color: "white", fontSize: 20, margin: 6 }}>
            {"Title"}
          </Text>
          <Text style={{ color: "white", margin: 6 }}>{"Subtitle"}</Text>
        </View>
      </View>
    );
  }
}
