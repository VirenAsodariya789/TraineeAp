import React, { Component } from "react";

import {
  Text,
  View,
  StyleSheet,
  Platform,
  Alert,
  BackHandler,
} from "react-native";

export default class App extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillMount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    Alert.alert(
      "Exit from App",
      "Do you want to exit from App?",
      [
        {
          text: "Yes",
          onBackPress: () => BackHandler.exitApp(),
        },
        {
          text: "No",
          onBackPress: () => console.log("NO Pressed"),
        },
      ],
      { cancelable: false }
    );
    return true;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Press Hardware back button and see the alert message{"\n"}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
});
