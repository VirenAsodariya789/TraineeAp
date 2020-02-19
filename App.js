/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import { View,StyleSheet,Button } from "react-native";


export default class ButtonBasics  extends Component {
  _onPressButton() {
    alert('You tapped the button!')
  }

  render() {
    return (
      // Displaying a basic button
      //  
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
      </View>

      <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
        </View>
      </View>
        
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 25
  },
  alternativeLayoutButtonContainer: {
    margin: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});