// @flow

import React from "react";
import { StyleSheet } from "react-native";
import { Thumbnail } from "native-base";
import { isNull } from "lodash";

type PropType = {
    source?: string,
    style?: StyleSheet.Style,
    size?: "large" | "medium" | "small"
};
const defaultImage = require( "../../assets/avatar.png" );

const styles = StyleSheet.create( {
    border: {
        borderWidth: 1.5,
        borderColor: "#f9ab19"
    }
} );
const Avatar = ( { source, size, style }: PropType ) => {
    const image =
        isNull( source ) || source === "" ? defaultImage : { uri: source };
    let small = false;
    let large = false;
    if ( size === "large" ) large = true;
    else if ( size === "small" ) small = true;

    return (
        <Thumbnail
            large={ large }
            small={ small }
            source={ image }
            style={ [ styles.border, style ] }
        />
    );
};

Avatar.defaultProps = {
    style: null,
    size: "medium",
    source: null
};

export default Avatar;
