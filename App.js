import React, { Component } from 'react';
import { Text, View,Image,ScrollView,TextInput } from 'react-native';

export default class ScrollViewExample extends Component {
  render() {
    return (
      <ScrollView>
      
        <View>
          <Text>hello</Text>
          <Text>H R U?</Text>
          <Image source="https://reactnative.dev/docs/assets/p_cat2.png"
            style={{width:200,height:200}}/>

        </View>
        <TextInput style={{height:80,borderRadius:10,borderColor:'red',borderWidth:1}}
        defaultValue="you can type in"/>
        <View>
          <Text>hello</Text>
          <Text>H R U?</Text>
          <Text>hello</Text>
          <Text>H R U?</Text>
          <Text>hello</Text>
          <Text>H R U?</Text>
          <Text>hello</Text>
          <Text>H R U?</Text>
          <Text>hello</Text>
          <Text>H R U?</Text>
          <Text>hello</Text>
          <Text>H R U?</Text>
          <Text>hello</Text>
          <Text>H R U?</Text>
          <Text>hello</Text>
          <Text>H R U?</Text>
          <Text>hello</Text>
          <Text>H R U?</Text>
          </View>
      </ScrollView>
    );
  }
}