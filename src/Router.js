import { StackNavigator } from "react-navigation";
import Authentication from "./screens/auth/router";
import Drawer from "./screens/main/drawer";

const AppNavigator = StackNavigator(
    {
        Authentication: { screen: Authentication },
        Main: { screen: Drawer }
    },
    {
        initialRouteName: "Authentication",
        headerMode: "none"
    }
);

export default AppNavigator;
