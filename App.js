import React, { Component } from "react";
import { TextInput, Text, TouchableOpacity, View } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enterredText: ""
    };
  }

  clear = () => {
    this._textInput.setNativeProps({
      text: " "
    });
  };

  render() {
    return (
      <View style={{ justifyContent: "center", flex: 1 }}>
        <TextInput
          ref={component => {
            this._textInput = component;
          }}
          style={{
            height: 50,
            marginHorizontal: 20,
            borderWidth: 1,
            borderColor: "#ccf"
          }}
          onChangeText={text => {
            this._textInput.setNativeProps({ text: text });
          }}
        />
        <TouchableOpacity onPress={() => this.clear()}>
          <Text> Clear</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
