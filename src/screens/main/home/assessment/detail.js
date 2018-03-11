// @flow
import React, { Component } from "react";
import {
    Container,
    List,
    ListItem,
    Text,
    Body,
    Right,
    Input,
    Button
} from "native-base";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Bold } from "@components";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import type { StudentAssessmentType } from "@type";
import type { InputProps } from "redux-form/es/Field";
import data from "./datas";
import globalStyle from "../../globalStyle";

type PropType = {
    results?: Array<StudentAssessmentType>
};
type StateType = {};

type InputType = {
    input: InputProps,
    label: string
};

const styles = StyleSheet.create( {
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        padding: 5
    },
    input: {
        borderColor: "#CCC",
        borderWidth: 0.5,
        textAlign: "center"
    },
    infoContainer: {
        flex: 1,
        flexDirection: "row"
    },
    info: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    infoSummary: {
        color: "#0000FF",
        fontWeight: "bold"
    }
} );
const RenderNumeric = ( { input, label }: InputType ) => (
    <View style={ styles.inputContainer }>
        <Input
            style={ styles.input }
            width={ 65 }
            keyboardType="numeric"
            { ...input }
        />
        <Text note style={ { fontSize: 10 } }>
            {label}
        </Text>
    </View>
);

class Detail extends Component<PropType, StateType> {
    static navigationOptions = {
        title: "Mahasiswa",
        isBack: true
    };
    static defaultProps = {
        results: data
    };

    _endAssessment = () => console.log( "END" );
    _renderRow = ( item, index ) => (
        <ListItem>
            <Body>
                <View style={ styles.infoContainer }>
                    <View style={ styles.info }>
                        <Bold>{item.nama}</Bold>
                        <Text>{item.nim}</Text>
                    </View>
                    <Text style={ styles.infoSummary }>{item.nilai}</Text>
                </View>
                <View style={ { flex: 1, flexDirection: "row" } }>
                    <Field
                        name={ `Mahasiswa[${ index }].tugas` }
                        label="Tugas"
                        component={ RenderNumeric }
                    />
                    <Field
                        name={ `Mahasiswa[${ index }].partisipasi` }
                        label="Aktif"
                        component={ RenderNumeric }
                    />
                    <Field
                        name={ `Mahasiswa[${ index }].uts` }
                        label="UTS"
                        component={ RenderNumeric }
                    />
                    <Field
                        name={ `Mahasiswa[${ index }].uas` }
                        label="UAS"
                        component={ RenderNumeric }
                    />
                </View>
            </Body>
        </ListItem>
    );
    render() {
        const { results } = this.props;

        return (
            <Container style={ globalStyle.container }>
                <List
                    dataArray={ results }
                    renderRow={ ( item, key, index ) =>
                        this._renderRow( item, index )
                    }
                />
                <View style={ { padding: 10 } }>
                    <Button block rounded onPress={ () => this._endAssessment() }>
                        <FontAwesome name="save" style={ globalStyle.icon } />
                        <Text>SELESAI</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}

const detailForm = reduxForm( {
    form: "detailForm",
    enableReinitialize: true
} )( Detail );

const mapStateToProps = () => {
    const daftarMahasiswa = [];
    data.map( item =>
        daftarMahasiswa.push( {
            nim: item.nim,
            tugas: item.tugas,
            partisipasi: item.partisipasi,
            uts: item.uts,
            uas: item.uas
        } )
    );
    return {
        initialValues: {
            Mahasiswa: daftarMahasiswa
        }
    };
};
export default connect( mapStateToProps )( detailForm );
