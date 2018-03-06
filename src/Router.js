import { StackNavigator } from "react-navigation";
import AuthenticationNavigator from "./screens/auth/router";
import Drawer from "./screens/main/drawer";

const AppNavigator = StackNavigator(
    {
        Auth: { screen: AuthenticationNavigator },
        Main: { screen: Drawer }
    },
    {
        initialRouteName: "Auth",
        headerMode: "none"
    }
);

export default AppNavigator;
