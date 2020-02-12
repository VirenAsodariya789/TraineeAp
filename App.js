/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Image } from "react-native";

export default class Bananas extends Component {
  render() {
    let pic = {
      uri:
        "https://images.pexels.com/photos/1804035/pexels-photo-1804035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    };
    return <Image source={pic} style={{ width: 200, height: 150 }} />;
  }
}
