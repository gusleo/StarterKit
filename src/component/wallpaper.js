// @flow

import * as React from "react";
import {
    ImageBackground,
    Image,
    View,
    StyleSheet,
    Dimensions,
    Platform
} from "react-native";

const launchscreenBg = require( "../../assets/launchscreen-bg.png" );
const launchscreenLogo = require( "../../assets/logo-kitchen-sink.png" );

const deviceHeight = Dimensions.get( "window" ).height;

const styles = StyleSheet.create( {
    imageContainer: {
        flex: 1,
        width: null,
        height: null
    },
    logoContainer: {
        flex: 1,
        marginTop: deviceHeight / 9,
        marginBottom: 30
    },
    logo: {
        position: "absolute",
        left: Platform.OS === "android" ? 40 : 50,
        top: Platform.OS === "android" ? 35 : 60,
        width: 280,
        height: 100
    }
} );

type PropsType = {
    useDefaultLogo?: boolean,
    children?: React.Node
};

const Wallpaper = ( { useDefaultLogo, children }: PropsType ) => (
    <ImageBackground source={ launchscreenBg } style={ styles.imageContainer }>
        {useDefaultLogo && (
            <View style={ styles.logoContainer }>
                <Image source={ launchscreenLogo } style={ styles.logo } />
            </View>
        )}
        {children}
    </ImageBackground>
);

Wallpaper.defaultProps = {
    useDefaultLogo: false,
    children: null
};

export default Wallpaper;
