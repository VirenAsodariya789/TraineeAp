import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { iOSColors } from "react-native-typography";

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Text style={iOSColors.display4}>Hello Material!</Text>
        <Text style={iOSColors.display3}>Reguler 56</Text>
        <Text style={iOSColors.display2}>Reguler 45</Text>
        <Text style={iOSColors.display1}>Reguler 34</Text>
        <Text style={iOSColors.headline}>Reguler 24</Text>
        <Text style={iOSColors.title}>medium 20</Text>
        <Text style={iOSColors.subheading}>Reguler 16</Text>
        <Text style={iOSColors.body2}>medium 14</Text>
        <Text style={iOSColors.body1}>Reguler 14</Text>
        <Text style={iOSColors.caption}>Reguler 12</Text>
        <Text style={iOSColors.buttom}>medium 14</Text>
      </View>
    );
  }
}
