// @flow
import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Input } from "native-base";
import { Foundation } from "@expo/vector-icons";
import moment from "moment";
import DateTimePicker from "react-native-modal-datetime-picker";

type PropType = {
    minimumDate: ?Date,
    maximumDate: ?Date,
    placeholder: ?string,
    value?: string | ?Date,
    onChange: ( dateText: string ) => mixed
};

type StateType = {
    dateText: ?string,
    dateHolder: ?Date,
    isDateTimePickerVisible: boolean,
    format: string
};

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center"
    },
    calendar: {
        fontSize: 32,
        color: "#f9ab19",
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
        value: null
    };

    state = {
        format: "MM/DD/YYYY",
        isDateTimePickerVisible: false,
        dateText: moment().format( "MM/DD/YYYY" ),
        dateHolder: moment().toDate()
    };

    shouldComponentUpdate( nextProps: PropType, nextState: StateType ) {
        if ( this.props !== nextProps || this.state !== nextState ) return true;
        return false;
    }
    componentWillUpdate( nextProps: PropType ) {
        this._getDateAndDateText( nextProps );
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
        const { placeholder, minimumDate, maximumDate } = this.props;

        return (
            <View style={ styles.container }>
                <Input value={ dateText } placeholder={ placeholder } />
                <TouchableOpacity onPress={ () => this._showDateTimePicker() }>
                    <Foundation name="calendar" style={ styles.calendar } />
                </TouchableOpacity>
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
