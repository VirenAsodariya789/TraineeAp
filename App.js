/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from "react-native";

export default class FlatlistDemo extends Component {

  render() {
    return (

      /*List View using FlatList component 
        1=====>The FlatList component displays a scrolling list of changing,
              but similarly structured, data.
        2=====>The FlatList component requires two props: data and renderItem.
               data is the source of information for the list. 
              renderItem takes one item from the source and returns a formatted component to render.*/

      <View style={styles.container}>
        <FlatList
         data = {[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'}
        ]}
        renderItem = {({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:30,
    backgroundColor:'red'
  },
  item:{
    //padding:10,
    paddingTop:10,
    paddingLeft:25,
    
    fontSize:20,
    height:50,
    margin:10,
    backgroundColor:'blue'
  }
});
