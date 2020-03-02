/*This is an example of Segmented Control Tab in React Native*/
import React, { Component } from "react";
//Import React

import { StyleSheet, Text, View, Button } from "react-native";
//Import Basic React Native Component

import Spinner from "react-native-loading-spinner-overlay";

export default class App extends React.Component {
  state = {
    //default loading false
    loading: false
  };
  componentDidMount() {
    //Setting a timer to show the spinner demo in every 3 second
    setInterval(() => {
      this.setState({
        //change the state of the laoding in every 3 second
        loading: !this.state.loading
      });
    }, 5000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Spinner
          //visibility of Overlay Loading Spinner
          visible={this.state.loading}
          //Text with the Spinner
          textContent={"Loading..."}
          //Text style of the Spinner Text
          textStyle={styles.spinnerTextStyle}
        />
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          Spinner Overlay Example
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    paddingTop: 30,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  spinnerTextStyle: {
    color: "#FFF"
  }
});
