// @flow

import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, Button, Text } from "native-base";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { NavigationScreenProp, NavigationState } from "react-navigation";

import { RenderSelect, RenderDatePicker, RenderTextarea } from "@components";
import type { OptionType } from "@components/type";
import globalStyle from "../../globalStyle";

type PropType = {
    navigation: NavigationScreenProp<NavigationState, *>,
    enableToEdit?: boolean
};
type StateType = {
    encounter: Array<OptionType>
};

class Lectures extends Component<PropType, StateType> {
    static navigationOptions = {
        title: "Perkuliahan"
    };
    static defaultProps = {
        enableToEdit: true
    };

    componentWillMount() {
        this._generateEncounter();
    }
    _startLectures() {
        this.props.navigation.navigate( "Detail" );
    }

    _generateEncounter() {
        const data = [];
        for ( let i = 1; i <= 16; i += 1 ) {
            data.push( { value: i, label: i.toString() } );
        }
        this.setState( { encounter: data } );
    }
    render() {
        const { encounter } = this.state;
        const { enableToEdit } = this.props;

        return (
            <Container style={ globalStyle.container }>
                <Content padder>
                    <Field
                        name="PilihMK"
                        label="Pilih MK"
                        component={ RenderSelect }
                        options={ [
                            { value: 0, label: "Sosiologi Politik" },
                            { value: 1, label: "Antropologi" }
                        ] }
                    />
                    <Field
                        name="TahunAjaran"
                        label="Tahun Ajaran"
                        component={ RenderSelect }
                        options={ [
                            { value: 0, label: "A/2018" },
                            { value: 1, label: "B/2018" }
                        ] }
                    />
                    <Field
                        name="Pertemuan"
                        label="Pertemuan Ke - "
                        component={ RenderSelect }
                        options={ encounter }
                    />
                    <Field
                        name="Tanggal"
                        label="Tanggal"
                        component={ RenderDatePicker }
                    />
                    <Field
                        name="Materi"
                        label=""
                        placeholder="Deskripsi materi perkuliahan"
                        rowSpan={ 5 }
                        component={ RenderTextarea }
                    />
                    <View style={ { paddingTop: 10, marginBottom: 10 } }>
                        {enableToEdit ? (
                            <Button
                                block
                                rounded
                                onPress={ () => this._startLectures() }
                            >
                                <FontAwesome
                                    name="save"
                                    style={ globalStyle.icon }
                                />
                                <Text>MULAI</Text>
                            </Button>
                        ) : (
                            <Button
                                block
                                rounded
                                onPress={ () => this._startLectures() }
                            >
                                <Ionicons
                                    name="ios-checkmark-circle-outline"
                                    style={ globalStyle.icon }
                                />
                                <Text>CHECK</Text>
                            </Button>
                        )}
                    </View>
                </Content>
            </Container>
        );
    }
}

const LecturesForm = reduxForm( {
    form: "lectureForm",
    enableReinitialize: true
} )( Lectures );

const mapStateToProps = () => ( {
    intialValues: {
        PilihMK: 0,
        TahunAjaran: 0,
        Pertemuan: 1
    }
} );
export default connect( mapStateToProps )( LecturesForm );
