/*This is an example of Segmented Control Tab in React Native*/
import React, { Component } from "react";
//Import React

import {
  ToastAndroid,
  Alert,
  StyleSheet,
  Text,
  View,
  Button
} from "react-native";
//Import Basic React Native Component

const Toast = props => {
  if (props.visible) {
    ToastAndroid.showWithGravityAndOffset(
      props.message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    return null;
  }
  return null;
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  handleButtonPress = () => {
    this.setState(
      {
        visible: true
      },
      () => {
        this.hideToast();
      }
    );
  };

  hideToast = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Toast visible={this.state.visible} message="example" />
        <Button title="Toast Demo" onPress={this.handleButtonPress} />
      </View>
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
