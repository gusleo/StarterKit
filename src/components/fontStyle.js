// @flow
import React, { type Node } from "react";
import { Text } from "native-base";
import { StyleSheet } from "react-native";

import { fontStyle } from "./styles";

type PropType = {
    children: Node,
    style?: StyleSheet.Styles
};

const Bold = ( { children, style }: PropType ) => (
    <Text style={ [ fontStyle.bold, style ] }>{children}</Text>
);
Bold.defaultProps = {
    style: {}
};

const Italic = ( { children, style }: PropType ) => (
    <Text style={ [ fontStyle.italic, style ] }>{children}</Text>
);
Italic.defaultProps = {
    style: {}
};

export { Bold, Italic };
