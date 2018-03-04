import React from "react";
import { StackNavigator } from "react-navigation";
import { Header } from "@components";
import SideBar from "./sidebar";
import HomeTabNavigator from "../main/home";
import Login from "./auth/login";

export default StackNavigator(
    {
        Home: { screen: HomeTabNavigator },
        Login: { screen: Login }
    },
    {
        initialRouteName: "Home",
        headerMode: "screen",
        navigationOptions: ( { navigation } ) => ( {
            header: props => (
                <Header
                    isBack={
                        navigation.routes !== undefined &&
                        navigation.routes.length > 1
                    }
                    navigation={ navigation }
                    { ...props }
                />
            )
        } ),
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar { ...props } />
    }
);
