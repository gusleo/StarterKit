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
import { ListView, ListViewDataSource } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Bold } from "@components";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import type { StudentType } from "@type";
import type { InputProps } from "redux-form/es/Field";
import data from "./datas";
import globalStyle from "../../globalStyle";

type PropType = {
    results?: Array<StudentType>
};
type StateType = {};

type InputType = {
    input: InputProps
};

const RenderNumeric = ( { input }: InputType ) => (
    <Input width={ 50 } keyboardType="numeric" { ...input } />
);

class Detail extends Component<PropType, StateType> {
    static navigationOptions = {
        title: "Mahasiswa",
        isBack: true
    };
    static defaultProps = {
        results: data
    };
    constructor( props ) {
        super( props );
        this.ds = new ListView.DataSource( {
            rowHasChanged: ( r1, r2 ) => r1 !== r2
        } );
    }

    ds: ListViewDataSource;
    _defineColorAndTextStatus = ( status: number ) => {
        let text = "Hadir";
        let color = "#165C0D";
        switch ( status ) {
        case 1:
            text = "Ijin";
            color = "#EF9D21";
            break;
        case 2:
            text = "Alpha";
            color = "#690500";
            break;
        default:
            break;
        }
        return { Status: text, Color: color };
    };
    _renderRow = ( item, index ) => {
        const name = `Mahasiswa[${ index }].value`;
        const { Status, Color } = this._defineColorAndTextStatus( item.status );
        return (
            <ListItem>
                <Body>
                    <Text note style={ { color: Color } }>
                        {Status}
                    </Text>
                    <Bold>{item.nama}</Bold>
                    <Text>{item.nim}</Text>
                </Body>
                <Right>
                    <Field name={ name } component={ RenderNumeric } />
                </Right>
            </ListItem>
        );
    };
    render() {
        const { results } = this.props;

        return (
            <Container style={ globalStyle.container }>
                <List
                    disableRightSwipe
                    dataSource={ this.ds.cloneWithRows( results ) }
                    renderRow={ ( item, key, index ) =>
                        this._renderRow( item, index )
                    }
                    renderRightHiddenRow={ () => (
                        <Button full danger>
                            <Ionicons
                                style={ [ globalStyle.icon, { fontSize: 30 } ] }
                                name="ios-people"
                            />
                        </Button>
                    ) }
                    rightOpenValue={ -75 }
                />
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
        daftarMahasiswa.push( { nim: item.nim, value: item.nilai } )
    );
    return {
        initialValues: {
            Mahasiswa: daftarMahasiswa
        }
    };
};
export default connect( mapStateToProps )( detailForm );
