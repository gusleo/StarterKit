// @flow
import React, { type Node } from "react";
import { StyleSheet } from "react-native";
import { Item, Label } from "native-base";
import type { MetaProps } from "redux-form/es/Field";
import { Italic } from "../fontStyle";
import styles from "./styles";

type PropType = {
    label: string,
    meta: MetaProps,
    labelStyle: StyleSheet.Styles,
    stacked: boolean,
    children: Node
};

export default ( { label, meta, labelStyle, children, stacked }: PropType ) => (
    <Item stackedLabel={ stacked } error={ meta.error && meta.touched }>
        <Label style={ !stacked ? [ styles.label, labelStyle ] : null }>
            {label}
        </Label>
        {children}
        {meta.error &&
            meta.touched && <Italic style={ styles.error }>{meta.error}</Italic>}
    </Item>
);
