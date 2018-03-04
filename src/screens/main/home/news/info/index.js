// @flow
import React, { PureComponent } from "react";

import {
    Content,
    List,
    ListItem,
    Thumbnail,
    Text,
    Body,
    Right
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import type { NewsType } from "../types";
import datas from "./data";

type PropType = {
    results: Array<NewsType>
};
type StateType = {};
export default class InfoList extends PureComponent<PropType, StateType> {
    static defaultProps = {
        results: datas
    };
    render() {
        const { results } = this.props;

        return (
            <Content>
                <List
                    dataArray={ results }
                    renderRow={ item => (
                        <ListItem>
                            <Thumbnail
                                square
                                size={ 80 }
                                source={ { uri: item.ImageUrl } }
                            />
                            <Body>
                                <Text>{item.Title}</Text>
                                <Text note numberOfLines={ 3 }>
                                    {item.ShortDescription}
                                </Text>
                            </Body>
                            <Right>
                                <Ionicons
                                    name="ios-arrow-forward"
                                    size={ 32 }
                                    color="grey"
                                />
                            </Right>
                        </ListItem>
                    ) }
                />
            </Content>
        );
    }
}
