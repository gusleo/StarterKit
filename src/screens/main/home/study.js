// @flow
import React, { Component } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
    Container,
    Content,
    Text,
    List,
    ListItem,
    Body,
    Right
} from "native-base";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { Bold } from "@components";
import globalStyles from "../../../boot/globalStyle";
import type { StudyType } from "./types";

import styles from "./styles";
import { studyResult } from "./datas";

type PropType = {
    results: Array<StudyType>,
    navigation: NavigationScreenProp<NavigationState, *>
};
type StateType = {};

export default class Study extends Component<PropType, StateType> {
    static defaultProps = {
        results: studyResult
    };

    /**
     * Modify current header,
     * set title and rightMenu header
     *
     * @static
     * @memberof Study
     */
    static navigationOptions = ( { navigation } ) => ( {
        title: "KHS",
        headerRight: (
            <TouchableWithoutFeedback
                onPress={ () => navigation.state.params.downloadAsPdf() }
            >
                <MaterialIcons name="picture-as-pdf" size={ 32 } color="white" />
            </TouchableWithoutFeedback>
        )
    } );

    /* To access this.downloadAsPdf()
    *  from headerRight, pass by reference the function
    *  on setParams
    */
    componentDidMount() {
        this.props.navigation.setParams( {
            downloadAsPdf: this.downloadAsPdf.bind( this )
        } );
    }

    downloadAsPdf = () => {
        console.log( "DOWNLOAD" );
    };
    _renderRow = ( item: StudyType ) => {
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
                        <Bold>{item.code}</Bold>
                        <Text>{item.title}</Text>
                        <Text note>{`SKS: ${ item.sks }`}</Text>
                    </Body>
                    <Right>
                        <Text>{item.value}</Text>
                    </Right>
                </ListItem>
            );
            break;
        case "total":
            content = (
                <ListItem>
                    <Body>
                        <Bold>{item.title}</Bold>
                    </Body>
                    <Right>
                        <Bold>{item.value}</Bold>
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
                        renderRow={ ( item: StudyType ) => this._renderRow( item ) }
                    />
                </Content>
            </Container>
        );
    }
}
