import * as React from "react";
import {
  Text,
  View,
  Button,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ScrollView
} from "react-native";
import ImageLoader from "react-native-image-progress";
import * as Progress from "react-native-progress";

import {
  DebugInstructions,
  ReloadInstructions,
  Header,
  LearnMoreLinks,
  Colors
} from "react-native/Libraries/NewAppScreen";

const App = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={StyleSheet.scrollView}
        >
          <View style={StyleSheet.container}>
            <ImageLoader
              component={ImageLoader}
              resizeMode="contain"
              indicator={Progress}
              indicator={true}
              indicatorProps={{
                size: 80,
                borderWidth: 0,
                color: "#062baa",
                unfilledColor: "#0e6605"
              }}
              source={{
                uri:
                  "http://www.techup.co.in/wp-content/uploads/2019/01/img_butterfly.jpg"
              }}
              style={[styles.fitImage]}
            ></ImageLoader>
          </View>
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: "absolute",
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  highlight: {
    fontWeight: "700"
  },
  fitImage: {
    height: 300,
    width: 300,
    padding: 4
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flexDirection: "column"
  }
});

export default App;
