// @flow
import React, { Component } from "react";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { Image, Alert, TouchableOpacity, View } from "react-native";
import {
    Content,
    Text,
    Icon,
    Container,
    Left,
    Right,
    Badge
} from "native-base";
import Collapsible from "react-native-collapsible";
import { isNull } from "lodash";
import type { MenuType, SubMenuType } from "./types";
import styles from "./style";
import sidemenu from "./data";

const drawerCover = require( "../../../../assets/drawer-cover.png" );
const drawerImage = require( "../../../../assets/logo-kitchen-sink.png" );

type PropType = {
    navigation: NavigationScreenProp<NavigationState, *>
};
type StateType = {
    datas: Array<MenuType>
};

export default class SideBar extends Component<PropType, StateType> {
    state = {
        datas: sidemenu
    };

    _onMenuClickHandler( data: MenuType ) {
        if ( !isNull( data.submenu ) && data.submenu !== undefined ) {
            // if have submenu, find the index
            // and change the value
            // re-render component by setState
            const menus = [ ...this.state.datas ];
            const index = menus.findIndex( val => val.key === data.key );

            if ( index > -1 ) {
                menus[ index ].collapsed = !data.collapsed;
            }

            this.setState( { datas: menus } );
        } else if ( data.isSignOut ) {
            Alert.alert( "", "Are you sure you want to logout?", [
                { text: "Cancel", style: "cancel" },
                { text: "Log Out", onPress: () => this._onLogoutHandler() }
            ] );
        } else {
            this.props.navigation.navigate( data.route );
        }
    }

    _onLogoutHandler = () => {
        console.log( "LOG OUT CLICKED" );
    };

    _renderSubMenu( submenu: Array<SubMenuType> ) {
        return submenu.map( data => (
            <TouchableOpacity
                key={ data.key }
                activeOpacity={ 1 }
                style={ styles.subMenu }
                onPress={ () => this._subMenuClick( data ) }
            >
                <Left>
                    <View style={ styles.menuContainer }>
                        <Icon active name={ data.icon } style={ styles.icon } />
                        <Text style={ styles.text }>{data.name}</Text>
                    </View>
                </Left>
            </TouchableOpacity>
        ) );
    }
    _subMenuClick( data: SubMenuType ) {
        this.props.navigation.navigate( data.route, data.param );
    }
    _renderMainMenu( data: MenuType ) {
        return (
            <TouchableOpacity
                key={ data.key }
                activeOpacity={ 1 }
                style={ styles.mainMenu }
                onPress={ () => this._onMenuClickHandler( data ) }
            >
                <Left>
                    <View style={ styles.menuContainer }>
                        <Icon active name={ data.icon } style={ styles.icon } />
                        <Text style={ styles.text }>{data.name}</Text>
                    </View>

                    {data.submenu && (
                        <View style={ styles.collapsible }>
                            <Collapsible
                                collapsed={ data.collapsed }
                                key={ data.key }
                            >
                                {this._renderSubMenu( data.submenu )}
                            </Collapsible>
                        </View>
                    )}
                </Left>

                <Right style={ styles.badgeContainer }>
                    {data.badge &&
                        data.badge > 0 && (
                            <Badge style={ styles.badge }>
                                <Text style={ styles.badgeText }>{`${
                                    data.badge
                                }`}</Text>
                            </Badge>
                        )}
                    {data.submenu && (
                        <TouchableOpacity
                            onPress={ () => this._onMenuClickHandler( data ) }
                        >
                            <Ionicons
                                style={ styles.collapsibleIcon }
                                name={
                                    data.collapsed
                                        ? "md-arrow-dropright"
                                        : "md-arrow-dropdown"
                                }
                            />
                        </TouchableOpacity>
                    )}
                </Right>
            </TouchableOpacity>
        );
    }

    render() {
        const { datas } = this.state;
        return (
            <Container>
                <Content bounces={ false } style={ styles.sidebarContent }>
                    <Image source={ drawerCover } style={ styles.drawerCover } />
                    <Image
                        square
                        style={ styles.drawerImage }
                        source={ drawerImage }
                    />

                    {datas.map( data => this._renderMainMenu( data ) )}
                </Content>
            </Container>
        );
    }
}
