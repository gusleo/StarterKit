// @flow
import React from "react";
import { TabNavigator, TabBarBottom } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import Schedule from "./schedule";
import LectureNavigation from "./lectures/router";
import AssessmentNavigation from "./assessment/router";

type PropType = {
    focused: boolean,
    tintColor: string
};
export default TabNavigator(
    {
        Schedule: { screen: Schedule },
        Lectures: { screen: LectureNavigation },
        Assessment: { screen: AssessmentNavigation }
    },
    {
        navigationOptions: ( { navigation } ) => ( {
            tabBarLabel: () => {
                const { routeName } = navigation.state;
                let label: string = "";
                switch ( routeName ) {
                case "Schedule":
                    label = "Jadwal";
                    break;
                case "Lectures":
                    label = "Perkuliahan";
                    break;
                case "Assessment":
                    label = "Penilaian";
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
                if ( routeName === "Schedule" ) {
                    iconName = `ios-alarm${ focused ? "" : "-outline" }`;
                } else if ( routeName === "Lectures" ) {
                    iconName = `ios-school${ focused ? "" : "-outline" }`;
                } else if ( routeName === "Assessment" ) {
                    iconName = `ios-clipboard${ focused ? "" : "-outline" }`;
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
