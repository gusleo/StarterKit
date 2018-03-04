// @flow
import React from "react";
import { StyleSheet, View } from "react-native";
import { Bold } from "./fontStyle";

type PropType = {
    title: string,
    style?: StyleSheet.Style
};

const styles = StyleSheet.create( {
    container: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: "#CCC"
    }
} );

const SubHeader = ( { title, style }: PropType ) => (
    <View style={ [ styles.container, style ] }>
        <Bold>{title}</Bold>
    </View>
);

SubHeader.defaultProps = {
    style: null
};

export default SubHeader;
