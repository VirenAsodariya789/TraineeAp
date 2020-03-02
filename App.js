/*This is an example of Segmented Control Tab in React Native*/
import React, { Component } from "react";
//Import React

import { StyleSheet, Text, View } from "react-native";
//Import Basic React Native Component

import SegmentedControlTab from "react-native-segmented-control-tab";
//Import SegmentedControlTab

class App extends Component {
  constructor() {
    super();
    this.state = {
      customStyleIndex: 0
      //Default selected Tab Indexes for cusatom SegmentedControlTab
    };
  }

  handleCustomIndexSelect = (index: number) => {
    //handle tab selection for custom Tab Selection SegmentedControlTab
    this.setState(prevState => ({ ...prevState, customStyleIndex: index }));
  };

  render() {
    const { customStyleIndex } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Custom segmented control with custom styles
        </Text>
        <View style={styles.Seperator} />

        {/* Simple Segmented with Custom Styling*/}
        <SegmentedControlTab
          values={["one", "two", "three"]}
          selectedIndex={customStyleIndex}
          onTabPress={this.handleCustomIndexSelect}
          borderRadius={0}
          tabsContainerStyle={{ height: 50, backgroundColor: "#F2F2F2" }}
          tabStyle={{
            backgroundColor: "#F2F2F2",
            borderWidth: 0,
            borderColor: "transparent"
          }}
          activeTabStyle={{ backgroundColor: "pink", marginTop: 2 }}
          tabTextStyle={{ color: "navyblue", fontWeight: "bold" }}
          activeTabTextStyle={{ color: "#888888" }}
        />
        {customStyleIndex === 0 && (
          <Text style={styles.tabContent}> Tab one Pressed</Text>
        )}
        {customStyleIndex === 1 && (
          <Text style={styles.tabContent}> Tab two Pressed</Text>
        )}
        {customStyleIndex === 2 && (
          <Text style={styles.tabContent}> Tab three Pressed</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    backgroundColor: "green",

    padding: 10
  },
  headerText: {
    padding: 8,
    fontSize: 17,
    color: "blue",
    textAlign: "center"
  },
  tabContent: {
    color: "red",
    fontSize: 20,
    margin: 24
  },
  Seperator: {
    marginHorizontal: -10,
    alignSelf: "stretch",
    borderTopWidth: 1,
    borderTopColor: "black",
    margin: 15,
    marginTop: 24
  },
  tabStyle: {
    borderColor: "#D52C43"
  },
  activeTabStyle: {
    backgroundColor: "#D52C43"
  }
});

export default App;
