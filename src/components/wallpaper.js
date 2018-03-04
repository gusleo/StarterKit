// @flow

import React, { type Node } from "react";
import {
    ImageBackground,
    Image,
    View,
    StyleSheet,
    Dimensions,
    PixelRatio
} from "react-native";

const launchscreenBg = require( "../../assets/launchscreen-bg.png" );
const launchscreenLogo = require( "../../assets/logo-kitchen-sink.png" );

const { width, height } = Dimensions.get( "window" );
const pixelWidth = PixelRatio.getPixelSizeForLayoutSize( width ) / 2 - 20;

const styles = StyleSheet.create( {
    imageContainer: {
        flex: 1,
        width: null,
        height: null
    },
    logoContainer: {
        flex: 1,
        marginTop: height / 8,
        marginBottom: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        alignItems: "center",
        width: pixelWidth > 500 ? 350 : pixelWidth,
        resizeMode: "contain"
    }
} );

type PropsType = {
    useDefaultLogo?: boolean,
    children?: Node
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
