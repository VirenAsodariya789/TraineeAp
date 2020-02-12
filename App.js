/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30
  },
  red: {
    color: "red"
  }
});

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>Just red</Text>
        <Text style={styles.bigBlue}>just bigblue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue,then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red,then bigBlue</Text>
      </View>
    );
  }
}
