import React from "react";
import { StackNavigator } from "react-navigation";
import { Header } from "../../component";
import SideBar from "./sidebar";
import Home from "./home";

export default StackNavigator(
    {
        Home: { name: "MyGome", screen: Home }
    },
    {
        initialRouteName: "Home",
        headerMode: "screen",
        navigationOptions: ( { navigation } ) => ( {
            header: props => (
                <Header
                    useBackButton={
                        navigation.routes != undefined &&
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
