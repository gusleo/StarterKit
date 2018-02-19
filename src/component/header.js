// @flow
import React, { Component } from "react";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { Header, Button, Icon, Left, Body, Right, Title } from "native-base";

type PropsType = {
    useBackButton?: boolean,
    hasTabs?: boolean,
    title: string,
    navigation: NavigationScreenProp<NavigationState, *>
};

type StateType = {};

class HeaderCustom extends Component<PropsType, StateType> {
    static defaultProps = {
        useBackButton: false,
        hasTabs: false
    };

    backButtonPress = () => console.log( "back button press" );

    renderRightMenu = () => (
        <Right>
            <Button />
        </Right>
    );

    renderLeftMenu() {
        const { useBackButton } = this.props;
        if ( !useBackButton ) {
            return (
                <Button
                    transparent
                    onPress={ () => this.props.navigation.navigate( "DrawerOpen" ) }
                >
                    <Icon name="menu" />
                </Button>
            );
        }
        return (
            <Button transparent onPress={ () => this.backButtonPress() }>
                <Icon name="arrow-back" />
            </Button>
        );
    }

    render() {
        return (
            <Header hasTabs={ this.props.hasTabs }>
                <Left>{this.renderLeftMenu()}</Left>

                <Body>
                    <Title>{this.props.title}</Title>
                </Body>

                {this.renderRightMenu()}
            </Header>
        );
    }
}

export default HeaderCustom;
