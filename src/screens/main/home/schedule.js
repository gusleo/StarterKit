// @flow
import React, { Component } from "react";
import {
    Container,
    Content,
    Text,
    List,
    ListItem,
    Body,
    Right
} from "native-base";

import { Bold } from "@components";
import globalStyles from "../globalStyle";
import type { ScheduleType } from "./types";

import styles from "./styles";
import schedules from "./datas";

type PropType = {
    results: Array<ScheduleType>
};
type StateType = {};

export default class Schedule extends Component<PropType, StateType> {
    static defaultProps = {
        results: schedules
    };

    /**
     * Modify current header,
     * set title
     *
     * @static
     * @memberof Schedule
     */
    static navigationOptions = {
        title: "Jadwal Kuliah"
    };

    _renderRow = ( item: ScheduleType ) => {
        let content = null;
        switch ( item.type ) {
        case "header":
            content = (
                <ListItem itemDivider>
                    <Body>
                        <Bold>{item.title}</Bold>
                    </Body>
                    <Right>
                        <Text note style={ styles.smallnote }>
                            {item.value}
                        </Text>
                    </Right>
                </ListItem>
            );
            break;
        case "courses":
            content = (
                <ListItem>
                    <Body>
                        <Bold>{item.title}</Bold>
                        <Text>{item.schedule}</Text>
                    </Body>
                    <Right>
                        <Text>{item.value}</Text>
                    </Right>
                </ListItem>
            );
            break;
        default:
            break;
        }
        return content;
    };
    render() {
        const { results } = this.props;
        return (
            <Container style={ globalStyles.container }>
                <Content padder>
                    <List
                        dataArray={ results }
                        renderRow={ ( item: ScheduleType ) =>
                            this._renderRow( item )
                        }
                    />
                </Content>
            </Container>
        );
    }
}
