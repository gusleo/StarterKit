// @flow
import React, { Component } from "react";
import { Container, Tabs, Tab, Button, Icon, Text } from "native-base";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import globalStyles from "../globalStyle";
import Identity from "./identity";
import Background from "./background";
import History from "./history";

type PropType = {};
type StateType = {};

class Student extends Component<PropType, StateType> {
    static navigationOptions = {
        title: "Profil",
        hasTabs: true
    };

    render() {
        return (
            <Container style={ globalStyles.container }>
                <Tabs>
                    <Tab heading="Identitas">
                        <Identity />
                    </Tab>
                    <Tab heading="Background">
                        <Background />
                    </Tab>
                    <Tab heading="Histori">
                        <History />
                    </Tab>
                </Tabs>
                <Button iconLeft block warning style={ { margin: 10 } }>
                    <Icon active name="clipboard" />
                    <Text>Simpan</Text>
                </Button>
            </Container>
        );
    }
}

const mapStateToProps = () => ( {
    initialValues: {
        Nim: "0012345",
        Status: 0,
        Nationality: 0
    }
} );

const StudentForm = reduxForm( {
    form: "profileForm",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    enableReinitialize: true
} )( Student );

export default connect( mapStateToProps )( StudentForm );
