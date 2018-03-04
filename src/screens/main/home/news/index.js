// @flow

import React, { Component } from "react";
import { Container, Tabs, Tab } from "native-base";
import Information from "./info";
import Announcement from "./announcement";

type PropType = {};
type StateType = {};
export default class extends Component<PropType, StateType> {
    static navigationOptions = {
        title: "Berita",
        hasTabs: true
    };
    render() {
        return (
            <Container>
                <Tabs>
                    <Tab heading="Info Pasca">
                        <Information />
                    </Tab>
                    <Tab heading="Pengumuman">
                        <Announcement />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
