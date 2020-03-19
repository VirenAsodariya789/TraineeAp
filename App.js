import React, { Component } from 'react';

import { StyleSheet, View, Text, ScrollView, Platform, Alert } from 'react-native';
 
export default class MyApp extends Component
{
  constructor()
  {
    super();

    this.Array_Items = [
      'January', 
      'February', 
      'March', 
      'April', 
      'May', 
      'June', 
      'July', 
      'August', 
      'September', 
      'October', 
      'November', 
      'December'
      ];
  }
  
  render()
  {
    return(
      <View style = { styles.MainContainer }>

        <ScrollView>

        {

          this.Array_Items.map(( item, key ) =>
          (
            <View key = { key } style = { styles.item }>


                <Text style = { styles.item_text_style } onPress={()=>{Alert.alert(item.toString())}}>{ item }</Text>


                <View style = { styles.item_separator }/>


            </View>
          ))
        
        }

        </ScrollView>

      </View>  
    )
  }
}
 
const styles = StyleSheet.create(
{
  MainContainer:
  {
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },

  item_text_style:
  {
    fontSize: 20,
    color: '#000',
    padding: 10
  },
  
  item_separator:
  {
    height: 1,
    width: '100%',
    backgroundColor: '#263238',
  }
});