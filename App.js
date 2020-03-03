import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { material } from "react-native-typography";

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Text style={material.display4}>Hello Material!</Text>
        <Text style={material.display3}>Reguler 56</Text>
        <Text style={material.display2}>Reguler 45</Text>
        <Text style={material.display1}>Reguler 34</Text>
        <Text style={material.headline}>Reguler 24</Text>
        <Text style={material.title}>medium 20</Text>
        <Text style={material.subheading}>Reguler 16</Text>
        <Text style={material.body2}>medium 14</Text>
        <Text style={material.body1}>Reguler 14</Text>
        <Text style={material.caption}>Reguler 12</Text>
        <Text style={material.buttom}>medium 14</Text>
      </View>
    );
  }
}
