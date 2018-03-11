// @flow

import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, Button, Text } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { NavigationScreenProp, NavigationState } from "react-navigation";

import { RenderSelect, RenderDatePicker, RenderTextarea } from "@components";
import globalStyle from "../../globalStyle";

type PropType = {
    navigation: NavigationScreenProp<NavigationState, *>
};
type StateType = {};

class Lectures extends Component<PropType, StateType> {
    static navigationOptions = {
        title: "Perkuliahan"
    };

    _startLectures() {
        this.props.navigation.navigate( "Detail" );
    }

    render() {
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
                        <Button
                            block
                            rounded
                            onPress={ () => this._startLectures() }
                        >
                            <FontAwesome name="save" style={ globalStyle.icon } />
                            <Text>MULAI</Text>
                        </Button>
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
        Pertemuan: 0
    }
} );
export default connect( mapStateToProps )( LecturesForm );
