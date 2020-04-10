import React, { Component } from 'react';
import { Text, View,Image,ScrollView,TextInput } from 'react-native';

function Cat(){
  return (
    <View >
      <Text>I am cat</Text>
    </View>
  )
}

export default class ScrollViewExample extends Component {
  render() {
    return (
      <View>
        <Text>welcome?</Text>
        <Cat/>
        <Cat/>
        <Cat/>

      </View>
    );
  }
}