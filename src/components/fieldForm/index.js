// @flow
import React from "react";
import { StyleSheet, Dimensions, PixelRatio, View } from "react-native";
import { Input, Picker, Textarea } from "native-base";
import type { MetaProps, InputProps } from "redux-form/es/Field";
import DatePicker from "../datepicker";
import FieldItem from "./fieldItem";
import styles from "./styles";
import type { OptionType } from "../type";

const Option = Picker.Item;
const { width } = Dimensions.get( "screen" );
const stacked: boolean = PixelRatio.getPixelSizeForLayoutSize( width ) <= 640;

type PropType = {
    input: InputProps,
    meta: MetaProps,
    label: string,
    labelStyle: StyleSheet.Styles,
    placeholder?: string
};

const RenderInput = ( {
    input,
    meta,
    label,
    labelStyle,
    placeholder
}: PropType ) => (
    <FieldItem
        meta={ meta }
        label={ label }
        labelStyle={ labelStyle }
        placeholder={ placeholder }
        stacked={ stacked }
    >
        <Input { ...input } />
    </FieldItem>
);
RenderInput.defaultProps = {
    placeholder: ""
};

type SelectType = PropType & {
    options: Array<OptionType>
};

const RenderSelect = ( {
    input,
    meta,
    label,
    labelStyle,
    placeholder,
    options
}: SelectType ) => (
    <FieldItem
        meta={ meta }
        label={ label }
        labelStyle={ labelStyle }
        placeholder={ placeholder }
        stacked={ stacked }
    >
        <Picker
            style={ stacked ? styles.pickerStack : styles.pickerInline }
            iosHeader="Pilih"
            mode="dropdown"
            placeholder={ placeholder }
            selectedValue={ input.value }
            onValueChange={ value => input.onChange( value ) }
            { ...input }
        >
            {options.map( item => (
                <Option
                    key={ item.value }
                    label={ item.label }
                    value={ item.value }
                />
            ) )}
        </Picker>
    </FieldItem>
);

RenderSelect.defaultProps = {
    placeholder: ""
};

const RenderDatePicker = ( {
    input,
    meta,
    label,
    labelStyle,
    placeholder
}: PropType ) => (
    <FieldItem
        meta={ meta }
        label={ label }
        labelStyle={ labelStyle }
        placeholder={ placeholder }
        stacked={ stacked }
    >
        <DatePicker { ...input } />
    </FieldItem>
);
RenderDatePicker.defaultProps = {
    placeholder: ""
};

type TextareaType = PropType & {
    rowSpan: number
};

const RenderTextarea = ( {
    input,
    meta,
    label,
    rowSpan,
    labelStyle,
    placeholder
}: TextareaType ) => (
    <FieldItem
        meta={ meta }
        label={ label }
        labelStyle={ labelStyle }
        placeholder={ placeholder }
        stacked
    >
        <View
            style={ {
                flex: 1,
                flexDirection: "row"
            } }
        >
            <Textarea
                bordered
                style={ {
                    flex: 1
                } }
                placeholder={ placeholder }
                rowSpan={ rowSpan }
                { ...input }
            />
        </View>
    </FieldItem>
);

RenderTextarea.defaultProps = {
    placeholder: ""
};

export { RenderInput, RenderSelect, RenderDatePicker, RenderTextarea };
