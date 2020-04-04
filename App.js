import React, { Component } from 'react';

import { StyleSheet, View, Text, ScrollView, Platform, Alert,Animated } from 'react-native';
 
class MyApp extends React.Component
{
  constructor(props){
    super(props);
    this.position=new Animated.ValueXY(0,0);
    Animated.spring(this.position,{
      toValue:{x:200,y:300},
      stiffness:300
    }).start()
  }
  
  render()
  {
    return(
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball}/>
      </Animated.View>
    );
  }
}
 export default MyApp
const styles = StyleSheet.create(
{
  container:
  {
    flex: 1,
    backgroundColor:'#fff',
  
    
  },
  ball:{
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:'red',
  }


});