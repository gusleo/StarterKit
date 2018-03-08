// @flow
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import DateTimePicker from "react-native-modal-datetime-picker";

type PropType = {
    minimumDate: ?Date,
    maximumDate: ?Date,
    placeholder: ?string,
    useSmallButton: ?boolean,
    value: ?string | ?Date,
    onChange: ( dateText: string ) => mixed
};

type StateType = {
    dateText: string,
    dateHolder: Date,
    isDateTimePickerVisible: boolean,
    format: string
};

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    calendar: {
        fontSize: 22,
        color: "#FFF",
        padding: 0
    },
    button: {
        padding: 0,
        margin: 4
    }
} );

export default class DatePicker extends Component<PropType, StateType> {
    static defaultProps = {
        minimumDate: undefined,
        maximumdate: undefined,
        placeholder: "",
        useSmallButton: false,
        value: null
    };
    static state = {
        format: "MM/DD/YYYY"
    };

    componenentWillUpdate( nextProps: PropType ) {
        const { dateText, dateHolder } = this._getDateAndDateText( nextProps );
        this.setState( { dateText, dateHolder } );
    }

    _getDateAndDateText = ( currentProps: PropType ) => {
        const { value } = currentProps;
        let dateHolder: Date;
        let dateText: string;

        if ( value ) {
            if ( value instanceof Date ) {
                dateText = moment( value ).format( this.state.format );
                dateHolder = value;
            } else if ( moment( value, this.state.format, true ).isValid() ) {
                dateHolder = moment( value, this.state.format, true ).toDate();
                dateText = value;
            }
        } else {
            const currentDate = moment();
            dateText = currentDate.format( this.state.format );
            dateHolder = currentDate.toDate();
        }

        return { dateText, dateHolder };
    };

    _showDateTimePicker = () =>
        this.setState( { isDateTimePickerVisible: true } );

    _hideDateTimePicker = () =>
        this.setState( { isDateTimePickerVisible: false } );

    _handleDatePicked = date => {
        const dateText = moment( date ).format( this.state.format );
        this.setState(
            {
                dateHolder: date,
                dateText
            },
            () => {
                this.props.onChange( dateText );
                this._hideDateTimePicker();
            }
        );
    };

    render() {
        const { dateText, dateHolder, isDateTimePickerVisible } = this.state;
        const {
            placeholder,
            minimumDate,
            maximumDate,
            useSmallButton
        } = this.props;

        return (
            <View style={ styles.container }>
                <Input value={ dateText } placeholder={ placeholder } />
                <Button
                    style={ styles.button }
                    onPress={ () => this._showDateTimePicker() }
                    small={ useSmallButton }
                >
                    <Ionicons name="calendar" style={ styles.calendar } />
                </Button>
                <DateTimePicker
                    mode="date"
                    date={ dateHolder }
                    minimumDate={ minimumDate }
                    maximumDate={ maximumDate }
                    isVisible={ isDateTimePickerVisible }
                    onConfirm={ this._handleDatePicked }
                    onCancel={ this._hideDateTimePicker }
                />
            </View>
        );
    }
}
