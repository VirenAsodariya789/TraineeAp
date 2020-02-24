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
  StyleSheet,
  TextInput,
  Button,
  Alert
} from "react-native";

export default class TextInputBasics extends Component {
  
    
    state = {
      text:"loading"
    }
  
  render() {
    return (
      //  Using a TextInput and Button example  component

      <View style={styles.container}>
       <Text style={{fontSize:50}}>{this.state.text}</Text>
       <TextInput
         style={{fontSize:30,height:40}}
         onChangeText={(text) => this.setState({ text })}
         placeholder="type here"
         style={styles.input}
       />
       <Button title="click me" 
       onPress={()=> Alert.alert("Suceesfull")}/>
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
