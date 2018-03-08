// @flow

import React, { Component } from "react";
import { Content, Text } from "native-base";

type PropType = {};
type StateType = {};

export default class Assessment extends Component<PropType, StateType> {
    static navigationOptions = {
        title: "Penilaian"
    };

    render() {
        return (
            <Content padder>
                <Text>Penilaian</Text>
            </Content>
        );
    }
}
