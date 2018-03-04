// @flow
import React from "react";
import { TabNavigator, TabBarBottom } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import News from "./news";
import Profile from "./profile";
import Payment from "./payment";
import Study from "./study";

type PropType = {
    focused: boolean,
    tintColor: string
};
export default TabNavigator(
    {
        News: { screen: News },
        KHS: { screen: Study },
        Payment: { screen: Payment },
        Profile: { screen: Profile }
    },
    {
        navigationOptions: ( { navigation } ) => ( {
            tabBarLabel: () => {
                const { routeName } = navigation.state;
                let label: string = "";
                switch ( routeName ) {
                case "News":
                    label = "Berita";
                    break;
                case "KHS":
                    label = "KHS";
                    break;
                case "Payment":
                    label = "Pembayaran";
                    break;
                case "Profile":
                    label = "Profil";
                    break;
                default:
                    label = "";
                    break;
                }
                return label;
            },
            tabBarIcon: ( { focused, tintColor }: PropType ) => {
                const { routeName } = navigation.state;
                let iconName;
                if ( routeName === "News" ) {
                    iconName = `ios-information-circle${
                        focused ? "" : "-outline"
                    }`;
                } else if ( routeName === "KHS" ) {
                    iconName = `ios-clipboard${ focused ? "" : "-outline" }`;
                } else if ( routeName === "Payment" ) {
                    iconName = `ios-cash${ focused ? "" : "-outline" }`;
                } else if ( routeName === "Profile" ) {
                    iconName = `ios-contact${ focused ? "" : "-outline" }`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={ iconName } size={ 25 } color={ tintColor } />;
            }
        } ),

        tabBarComponent: TabBarBottom,
        tabBarPosition: "bottom",
        tabBarOptions: {
            activeTintColor: "#f9ab19",
            inactiveTintColor: "gray"
        },
        animationEnabled: false,
        swipeEnabled: false
    }
);
