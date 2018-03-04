// @flow
import React, { Component } from "react";
import {
    NavigationScreenProp,
    NavigationState,
    NavigationScene,
    NavigationScreenDetails,
    NavigationStackScreenOptions
} from "react-navigation";
import { Header, Button, Icon, Left, Body, Right, Title } from "native-base";

type PropsType = {
    isBack?: boolean,
    hasTabs?: boolean,
    title: string,
    navigation: NavigationScreenProp<NavigationState, *>,
    getScreenDetails: (
        scene: NavigationScene
    ) => NavigationScreenDetails<NavigationStackScreenOptions>,
    scene: NavigationScene
};

type StateType = {};

class HeaderCustom extends Component<PropsType, StateType> {
    static defaultProps = {
        isBack: false,
        hasTab: false,
        title: ""
    };

    backButtonPress = () => console.log( "back button press" );

    /**
     * Default right menu
     * @memberof HeaderCustom
     */
    renderRightMenu = () => (
        <Right>
            <Button transparent small />
        </Right>
    );

    /**
     * Define icon and function for headerLeft
     * if isBack use navigate.back()
     * else navigate to OpenDrawer
     * @returns
     * @memberof HeaderCustom
     */
    renderLeftMenu() {
        const { isBack } = this.props;
        if ( !isBack ) {
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
    /**
     * Render header menu by configuration from navigationOptions
     * define from screen component
     * @returns
     * @memberof HeaderCustom
     */
    render() {
        const { getScreenDetails, scene, hasTabs, title } = this.props;
        const details = getScreenDetails( scene );

        // get navigationOptions
        const { options } = details;

        /**
         * if navigationOptions on Screen have headerRight
         * then use Screen headerRight
         * else use default
         */

        return (
            <Header hasTabs={ options.hasTabs || hasTabs }>
                <Left>{this.renderLeftMenu()}</Left>

                <Body>
                    <Title>{options.title || title}</Title>
                </Body>
                {options.headerRight ? (
                    <Right>{options.headerRight}</Right>
                ) : (
                    this.renderRightMenu()
                )}
            </Header>
        );
    }
}

export default HeaderCustom;
