import React from "react";
import { DrawerNavigator } from "react-navigation";
import MainNavigation from "./router";
import SideBar from "./sidebar";

export default DrawerNavigator(
    {
        MainNavigation: { screen: MainNavigation }
    },
    {
        initialRouteName: "MainNavigation",

        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar { ...props } />
    }
);
