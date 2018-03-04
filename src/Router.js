import { StackNavigator } from "react-navigation";

import Drawer from "./screens/main/drawer";

const AppNavigator = StackNavigator(
    {
        Main: { screen: Drawer }
    },
    {
        initialRouteName: "Main",
        headerMode: "none"
    }
);

export default AppNavigator;
