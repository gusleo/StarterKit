const React = require( "react-native" );

const { Platform, Dimensions, StyleSheet } = React;

const deviceHeight = Dimensions.get( "window" ).height;
const deviceWidth = Dimensions.get( "window" ).width;

export default StyleSheet.create( {
    sidebarContent: {
        flex: 1,
        backgroundColor: "#fff",
        top: -1
    },
    drawerCover: {
        alignSelf: "stretch",
        height: deviceHeight / 3.5,
        width: null,
        position: "relative",
        marginBottom: 10
    },
    drawerImage: {
        position: "absolute",
        left: Platform.OS === "android" ? deviceWidth / 11 : deviceWidth / 10,
        top: Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,
        width: 210,
        height: 75,
        resizeMode: "cover"
    },
    text: {
        fontWeight: Platform.OS === "ios" ? "500" : "400",
        fontSize: 16,
        marginLeft: 20
    },
    badgeText: {
        fontSize: Platform.OS === "ios" ? 13 : 11,
        fontWeight: "400",
        textAlign: "center",
        marginTop: Platform.OS === "android" ? -3 : undefined
    },
    mainMenu: {
        padding: 10,
        flex: 1,
        flexDirection: "row"
    },
    menuContainer: {
        alignItems: "center",
        flexDirection: "row"
    },
    subMenu: {
        paddingLeft: 50,
        padding: 10,
        flex: 1,
        flexDirection: "row"
    },
    icon: {
        color: "#777"
    },
    collapsibleIcon: {
        color: "#777",
        fontSize: 28
    },
    collapsible: {
        flex: 1,
        flexDirection: "row"
    },
    badgeContainer: {
        position: "absolute",
        top: 10,
        right: 8
    },
    badge: {
        borderRadius: 3,
        height: 25,
        width: 72,
        backgroundColor: "red"
    }
} );
