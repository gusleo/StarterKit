import { StackNavigator } from "react-navigation";
import StepOne from "./index";
import Detail from "./detail";

export default StackNavigator(
    {
        Assessment: { screen: StepOne },
        Detail: { screen: Detail }
    },
    {
        initialRouteName: "Assessment",
        headerMode: "none"
    }
);
