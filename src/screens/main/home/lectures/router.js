import { StackNavigator } from "react-navigation";
import StepOne from "./index";
import Detail from "./detail";

export default StackNavigator(
    {
        Lecture: { screen: StepOne },
        Detail: { screen: Detail }
    },
    {
        initialRouteName: "Lecture",
        headerMode: "none"
    }
);
