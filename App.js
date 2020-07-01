//This is an example code for AppState//
import React, { Component } from "react";
//import react in our code.
import { AppState, Text } from "react-native";
//import all the components we are going to use.
export default class App extends Component {
  state = {
    appState: AppState.currentState,
  };
  componentDidMount() {
    AppState.addEventListener("change", this._handleAppStateChange);
  }
  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
  }
  _handleAppStateChange = (nextAppState) => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      console.log("App State: " + "App has come to the foreground!");
      alert("App State: " + "App has come to the foreground!");
    }
    console.log("App State: " + nextAppState);
    alert("App State: " + nextAppState);
    this.setState({ appState: nextAppState });
  };
  render() {
    return (
      <Text
        style={{
          flex: 1,
          marginTop: 30,
          padding: 20,
          backgroundColor: "white",
        }}
      >
        Current state is: {this.state.appState}
      </Text>
    );
  }
}
