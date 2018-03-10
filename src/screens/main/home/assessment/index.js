// @flow

import React, { Component } from "react";
import { View } from "react-native";
import { Container, Content, Button, Text } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

import { RenderSelect } from "@components";
import globalStyle from "../../globalStyle";

type PropType = {};
type StateType = {};

class Assement extends Component<PropType, StateType> {
    static navigationOptions = {
        title: "Penilaian"
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

                    <View style={ { paddingTop: 10 } }>
                        <Button block rounded>
                            <FontAwesome name="save" style={ globalStyle.icon } />
                            <Text>MULAI</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

const AssementForm = reduxForm( {
    form: "assementForm",
    enableReinitialize: true
} )( Assement );

const mapStateToProps = () => ( {
    initialValues: {
        PilihMK: 0,
        TahunAjaran: 0
    }
} );
export default connect( mapStateToProps )( AssementForm );
