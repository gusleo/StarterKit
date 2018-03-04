// @flow
import React, { PureComponent } from "react";
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
import globalStyles from "../../../boot/globalStyle";
import { payments } from "./datas";
import type { PaymentType } from "./types";

type PropType = {
    results: Array<PaymentType>
};

type StateType = {};
export default class Payment extends PureComponent<PropType, StateType> {
    static navigationOptions = {
        title: "Pembayaran"
    };
    static defaultProps = {
        results: payments
    };
    render() {
        const { results } = this.props;
        return (
            <Container style={ globalStyles.container }>
                <Content padder>
                    <List
                        dataArray={ results }
                        renderRow={ ( item: PaymentType ) => (
                            <ListItem>
                                <Body>
                                    <Bold>{item.title}</Bold>
                                    <Text>{`Jumlah: ${ item.total }`}</Text>
                                    {item.paymentDate && (
                                        <Text note>{`Tgl Bayar: ${
                                            item.paymentDate
                                        }`}</Text>
                                    )}
                                </Body>
                                <Right>
                                    <Text
                                        note
                                        style={
                                            !item.isPaidOff
                                                ? { color: "red" }
                                                : {}
                                        }
                                    >
                                        {item.isPaidOff ? "Paid" : "Unpaid"}
                                    </Text>
                                </Right>
                            </ListItem>
                        ) }
                    />
                </Content>
            </Container>
        );
    }
}
