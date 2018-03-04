import { StackNavigator } from "react-navigation";
import AuthenticationNavigator from "./screens/auth/router";
import MainNavigation from "./screens/main/router";

const AppNavigator = StackNavigator(
    {
        Auth: { screen: AuthenticationNavigator },
        Main: { screen: MainNavigation }
    },
    {
        initialRouteName: "Auth",
        headerMode: "none"
    }
);

export default AppNavigator;
