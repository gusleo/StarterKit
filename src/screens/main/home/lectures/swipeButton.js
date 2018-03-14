// @flow
import React, { PureComponent } from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button, ActionSheet } from "native-base";

import globalStyle from "../../globalStyle";

const BUTTONS = [ "Hadir", "Ijin", "Alpa", "Cancel" ];

const CANCEL_INDEX = 3;
type PropType = {};
type StateType = {
    clicked: boolean
};
export default class SwipeButton extends PureComponent<PropType, StateType> {
    render() {
        return (
            <View
                style={ {
                    flex: 1
                } }
            >
                <Button
                    full
                    danger
                    onPress={ () =>
                        ActionSheet.show(
                            {
                                options: BUTTONS,
                                cancelButtonIndex: CANCEL_INDEX,

                                title: "Absensi Mahasiswa"
                            },

                            buttonIndex => {
                                this.setState( {
                                    clicked: BUTTONS[ buttonIndex ]
                                } );
                            }
                        )
                    }
                >
                    <Ionicons
                        style={ [ globalStyle.icon, { fontSize: 30 } ] }
                        name="ios-people"
                    />
                </Button>
            </View>
        );
    }
}
