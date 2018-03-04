// @flow
import React from "react";
import { StyleSheet } from "react-native";
import { Item, Input, Icon } from "native-base";

const styles = StyleSheet.create( {
    fancyInput: {
        borderColor: "#666",
        borderWidth: 1,
        backgroundColor: "#FFF",
        marginBottom: 10
    },
    fancyIcon: {
        color: "#666",
        paddingLeft: 20,
        fontSize: 24
    },
    fancyText: {
        color: "#666"
    }
} );

type PropsType = {
    icon: string,
    password?: boolean,
    placeholderTextColor?: string,
    placeholder?: string
};

const FancyInput = ( {
    icon,
    password,
    placeholder,
    placeholderTextColor
}: PropsType ) => (
    <Item rounded style={ styles.fancyInput }>
        <Icon name={ icon } style={ styles.fancyIcon } />
        <Input
            placeholder={ placeholder }
            secureTextEntry={ password }
            placeholderTextColor={ placeholderTextColor }
            style={ styles.fancyText }
        />
    </Item>
);

FancyInput.defaultProps = {
    password: false,
    placeholder: "",
    placeholderTextColor: "#CCC"
};

export default FancyInput;
