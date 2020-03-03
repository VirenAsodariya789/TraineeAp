/*This is an example of Segmented Control Tab in React Native*/
import React, { Component } from "react";
//Import React
import Toast from "react-native-root-toast";
import {
  ToastAndroid,
  Alert,
  StyleSheet,
  Text,
  View,
  Button
} from "react-native";
//Import Basic React Native Component

export default class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          visible: true
        }),
      4000
    ); // show toast after 2s

    setTimeout(
      () =>
        this.setState({
          visible: false
        }),
      6000
    ); // hide toast after 5s
  }

  render() {
    return (
      <Toast
        visible={this.state.visible}
        position={50}
        shadow={false}
        animation={false}
        hideOnPress={true}
      >
        This is a message
      </Toast>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  }
});
