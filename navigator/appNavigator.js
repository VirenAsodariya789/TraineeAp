import { creatAppContainer, createAppContainer } from "react-navigation";
import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import FirstPage from "../pages/FirstPage";
import SecondPage from "../pages/SecondPage";

const appNavigate = createStackNavigator(
  {
    First: {
      screen: FirstPage
    },
    Second: {
      screen: SecondPage
    }
  },
  {
    initialRouteName: First
  }
);

const AppNavigator = createAppContainer(appNavigate);
export default AppNavigator;
