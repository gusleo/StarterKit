import React, { Component } from "react";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { Header, Button, Icon, Left, Body, Right, Title } from "native-base";

type Props = {
    useBackButton?: boolean,
    hasTabs?: boolean,
    title: string,
    navigation: NavigationScreenProp<NavigationState, *>
};

type State = {};

class HeaderCustom extends Component<Props, State> {
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

HeaderCustom.defaultProps = {
    useBackButton: false,
    hasTab: false
};

export default HeaderCustom;
