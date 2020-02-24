/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import { ScrollView, Text, View, Image } from "react-native";

export default class ScrollViewBasics extends Component {
  render() {
    return (
      //  Using a ScrollView  component

      <ScrollView>
        <Text
          style={{
            fontSize: 50,
            color: "red",
            backgroundColor: "blue",
            marginTop: 60,
            padding: 5
          }}
        >
          ScrollView Demo
        </Text>
        <Image
          style={{
            width: 375,
            height: 250,
            marginTop: 20,
            borderRadius: 15
          }}
          source={{
            uri:
              "data:image/jpeg;base64,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"
          }}
        />

        <Image
          style={{
            width: 375,
            height: 250,
            marginTop: 20,
            borderRadius: 15
          }}
          source={{
            uri:
              "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }}
        />

        <Image
          style={{
            width: 375,
            height: 250,
            marginTop: 20,
            borderRadius: 15
          }}
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLEHavcxYU7yeKeZBsIdcEzbEUhog4eh8CfwCqAnLOjWlKYgFv"
          }}
        />

        <Image
          style={{
            width: 375,
            height: 250,
            marginTop: 20,
            borderRadius: 15
          }}
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnjQzRrHXqoORtun9uyPalHgz4duIZWzCRsMfw-V0ZOjBypOLv"
          }}
        />

        <Image
          style={{
            width: 375,
            height: 250,
            marginTop: 20,
            borderRadius: 15
          }}
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbiN_hlGeD6qC4LLYKuoPE2U7200zrajiiCyIEF1Muqj-fqoQk"
          }}
        />
      </ScrollView>
    );
  }
}
