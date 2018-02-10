import React from "react";
import { StackNavigator } from "react-navigation";
import Authentication from "./screens/auth/router";

const AppNavigator = StackNavigator(
  {
    Authentication: { screen: Authentication }
  },
  {
    initialRouteName: "Authentication",
    headerMode: "none"
  }
);

export default AppNavigator;
