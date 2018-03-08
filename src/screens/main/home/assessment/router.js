import { StackNavigator } from "react-navigation";
import StepOne from "./index";

export default StackNavigator(
    {
        Assessment: { screen: StepOne }
    },
    {
        initialRouteName: "Assessment",
        headerMode: "none"
    }
);
