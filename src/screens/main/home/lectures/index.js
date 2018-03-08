// @flow

import React, { Component } from "react";
import { Container, Content } from "native-base";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

import { RenderSelect, RenderInput } from "@components";
import globalStyle from "../../globalStyle";

type PropType = {};
type StateType = {};

class Lectures extends Component<PropType, StateType> {
    static navigationOptions = {
        title: "Perkuliahan"
    };

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
                        name="Pertemuan"
                        label="Pertemuan Ke-"
                        component={ RenderSelect }
                        options={ [
                            { value: 0, label: "1" },
                            { value: 1, label: "2" }
                        ] }
                    />
                </Content>
            </Container>
        );
    }
}

const LecturesForm = reduxForm( {
    form: "lectureForm"
} )( Lectures );

const mapStateToProps = () => ( {
    intialValues: {
        PilihMK: 0,
        TahunAjaran: 0,
        Pertemuan: 0
    }
} );
export default connect( mapStateToProps )( LecturesForm );
