// @flow

import React, { Component } from "react";
import { Content, Text } from "native-base";
import { View } from "react-native";
import { Slideshow } from "../../../component";
import type { SlideType } from "../../../component/type";

type PropType = {};
type StateType = {
    slideShowData: Array<SlideType>
};

export default class Home extends Component<PropType, StateType> {
    static navigationOptions = {
        title: "Home"
    };
    state = {
        slideShowData: [ { title: "", caption: "", url: "" } ]
    };
    render() {
        return (
            <View>
                <Slideshow dataSource={ this.state.slideShowData } />
                <Content>
                    <Text>Your are in Home</Text>
                </Content>
            </View>
        );
    }
}
