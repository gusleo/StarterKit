import { StackNavigator } from "react-navigation";
import StepOne from "./index";

export default StackNavigator(
    {
        Lecture: { screen: StepOne }
    },
    {
        initialRouteName: "Lecture",
        headerMode: "none"
    }
);
