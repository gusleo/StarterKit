// @flow
import React, { type Node } from "react";
import { StyleSheet } from "react-native";
import { Item, Label } from "native-base";
import type { MetaProps } from "redux-form/es/Field";
import { Italic } from "../fontStyle";
import styles from "./styles";

type PropType = {
    label: string,
    meta?: MetaProps,
    labelStyle: StyleSheet.Styles,
    stacked: boolean,
    children: Node
};

const FieldItem = ( {
    label,
    meta,
    labelStyle,
    children,
    stacked
}: PropType ) => (
    <Item stackedLabel={ stacked } error={ meta && meta.error && meta.touched }>
        <Label style={ !stacked ? [ styles.label, labelStyle ] : [ labelStyle ] }>
            {label}
        </Label>
        {children}
        {meta &&
            meta.error &&
            meta.touched && <Italic style={ styles.error }>{meta.error}</Italic>}
    </Item>
);
FieldItem.defaultProps = {
    meta: null
};

export default FieldItem;
