/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  TextInput
} from "react-native";

export default class TextInputBasics extends Component {
  render() {
    return (
      //  Using a TextInput  component

      <ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Your name"
            maxLength={20}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: 50
  },
  textInput: {
    borderColor: "#CCCCCC",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,

    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  }
});
