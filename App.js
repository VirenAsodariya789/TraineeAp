/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

export default class SectionListBasics extends Component {
  render() {
    return (
      // SectionList  component

      <View style={styles.container}>
        <SectionList
          sections={[
            { title: "D", data: ["Devin", "Dan", "Dominic"] },
            {
              title: "J",
              data: [
                "Jackson",
                "James",
                "Jillian",
                "Jimmy",
                "Joel",
                "John",
                "Julie"
              ]
            },
            { title: "K", data: ["Karan", "Kamal", "kiran"] }
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35
  },
  sectionHeader: {
    paddingTop: 3,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: "red"
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 50,
    color: "blue"
  }
});
