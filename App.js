//This is an example code for AppState//
import React, { Component } from "react";
//import react in our code.
import { StatusBar } from "react-native";
import { Text, AsyncStorage, View, TextInput, StyleSheet } from "react-native";
import { Value } from "react-native-reanimated";
//import all the components we are going to use.
class AsyncStorageExample extends Component {
  state = {
    name: "",
  };
  componentDidMount = () =>
    AsyncStorage.getItem("name").then((Value) =>
      this.setState({ name: Value })
    );

  setName = (Value) => {
    AsyncStorage.setItem("name", Value);
    this.setState({ name: Value });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={this.setName}
        />
        <Text>{this.state.name}</Text>
      </View>
    );
  }
}

export default AsyncStorageExample;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  textInput: {
    margin: 5,
    height: 100,
    width: 400,
    borderWidth: 1,
    backgroundColor: "#7685ed",
  },
});
