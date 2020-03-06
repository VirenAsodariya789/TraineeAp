//This is an example code for Navigator
import React, { Component } from "react";
//import react in our code.
import { StyleSheet, View, Button } from "react-native";
//import all the components we are going to use.
import { NavigationEvents } from "react-navigation";

export default class FirstPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <NavigationEvents onDidFocus={() => Alert.alert("Refreshed")} /> */}
        <Button
          onPress={() => {
            this.props.navigation.navigate("SecondPage");
          }}
          title="Learn More"
          color="#841584"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});
