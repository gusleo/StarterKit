import React from "react";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { Image } from "react-native";
import {
    Content,
    Text,
    List,
    ListItem,
    Icon,
    Container,
    Left,
    Right,
    Badge
} from "native-base";
import styles from "./style";

const drawerCover = require( "../../../../assets/drawer-cover.png" );
const drawerImage = require( "../../../../assets/logo-kitchen-sink.png" );

const datas = [
    {
        name: "Home",
        route: "Home",
        icon: "phone-portrait",
        bg: "#C5F442",
        badge: 0
    }
];

type Props = {
    navigation: NavigationScreenProp<NavigationState, *>
};

const SideBar = ( { navigation }: Props ) => (
    <Container>
        <Content
            bounces={ false }
            style={ { flex: 1, backgroundColor: "#fff", top: -1 } }
        >
            <Image source={ drawerCover } style={ styles.drawerCover } />
            <Image square style={ styles.drawerImage } source={ drawerImage } />

            <List
                dataArray={ datas }
                renderRow={ data => (
                    <ListItem
                        button
                        noBorder
                        onPress={ () => navigation.navigate( data.route ) }
                    >
                        <Left>
                            <Icon
                                active
                                name={ data.icon }
                                style={ {
                                    color: "#777",
                                    fontSize: 26,
                                    width: 30
                                } }
                            />
                            <Text style={ styles.text }>{data.name}</Text>
                        </Left>
                        {data.badge > 0 && (
                            <Right style={ { flex: 1 } }>
                                <Badge
                                    style={ {
                                        borderRadius: 3,
                                        height: 25,
                                        width: 72,
                                        backgroundColor: data.bg
                                    } }
                                >
                                    <Text style={ styles.badgeText }>{`${
                                        data.badge
                                    } Types`}</Text>
                                </Badge>
                            </Right>
                        )}
                    </ListItem>
                ) }
            />
        </Content>
    </Container>
);
export default SideBar;
