import React from "react";
import { StackNavigator } from "react-navigation";
import { Header } from "@components";
import SideBar from "./sidebar";
import HomeTabNavigator from "../main/home";
import ELearning from "./eLearningCenter";
import Profile from "./profile";

export default StackNavigator(
    {
        Home: { screen: HomeTabNavigator },
        ELearning: { screen: ELearning },
        Profile: { screen: Profile }
    },
    {
        initialRouteName: "Home",
        headerMode: "screen",
        navigationOptions: ( { navigation } ) => ( {
            header: props => (
                <Header
                    isBack={ !navigation.state.index === 1 }
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
