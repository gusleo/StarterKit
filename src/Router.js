import React from "react";
import { StackNavigator } from "react-navigation";
import { Login } from "./screens/auth";

const AppNavigator = StackNavigator({
  Login: { screen: Login }
});

export default AppNavigator;
