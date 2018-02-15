import React from "react";
import { StackNavigator } from "react-navigation";
import { Header } from "../../component";
import SideBar from "./sidebar";
import Home from "./home";

export default StackNavigator(
    {
        Home: { screen: Home }
    },
    {
        initialRouteName: "Home",
        headerMode: "screen",
        navigationOptions: ( { navigation } ) => ( {
            header: (
                <Header
                    useBackButton={ navigation.routes.length > 1 }
                    navigation={ navigation }
                />
            )
        } ),
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar { ...props } />
    }
);
