/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View } from "react-native";

export default class App extends Component {
  state = {
    myState:
      "This is a text component, created using state data. It will change or updated on clicking it."
  };
  updateState = () => this.setState({ myState: "The state is updated" });
  render() {
    return (
      <View>
        <Text onPress={this.updateState}> {this.state.myState} </Text>
      </View>
    );
  }
}
