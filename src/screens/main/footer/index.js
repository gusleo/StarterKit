// @flow
import React from "react";
import { Footer, Button, Icon, FooterTab } from "native-base";
import styles from "./style";

export default () => (
    <Footer>
        <FooterTab>
            <Button transparent>
                <Icon style={ styles.footerIcon } name="person" />
            </Button>
            <Button transparent>
                <Icon style={ styles.footerIcon } name="clipboard" />
            </Button>
            <Button transparent>
                <Icon style={ styles.footerIcon } name="cart" />
            </Button>
            <Button transparent>
                <Icon style={ styles.footerIcon } name="mail" />
            </Button>
        </FooterTab>
    </Footer>
);
