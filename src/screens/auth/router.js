import { StackNavigator } from "react-navigation";
import Login from "./login";

export default StackNavigator(
    {
        Login: { screen: Login }
    },
    {
        initialRouteName: "Login",
        headerMode: "none"
    }
);
