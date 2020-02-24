/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import {
  
  Text,
  View,
  Image,
  StyleSheet,
  TextInput
} from "react-native";

export default class TextInputBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }
  render() {
    return (
      //  Using a TextInput  component

      <View style={styles.container}>
       <Text style={{color: 'cyan'}}>{this.state.username}</Text>
       <TextInput
         value={this.state.username}
         onChangeText={(username) => this.setState({ username })}
         placeholder={'Username'}
         style={styles.input}
       />
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ecf0f1'
  },
 });
