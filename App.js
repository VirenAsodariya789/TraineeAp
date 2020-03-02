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

import Spinner from "react-native-loading-spinner-overlay";

export default class App extends React.Component {
  _toastWithDurationHandler = () => {
    //function to make Toast With Duration
    ToastAndroid.show("Hi I am Simple Toast", ToastAndroid.SHORT);
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Generate Toast With Duration"
          onPress={this._toastWithDurationHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1"
  }
});
