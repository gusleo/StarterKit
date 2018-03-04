// @flow
import React from "react";
import { View } from "react-native";
import { reduxForm, Field } from "redux-form";
import { Content } from "native-base";
import { connect } from "react-redux";
import { Avatar, RenderInput, RenderSelect } from "@components";
import styles from "./styles";

const Identity = () => (
    <Content padder>
        <View style={ styles.center }>
            <Avatar size="large" source="" />
        </View>
        <Field label="NIM" name="Nim" component={ RenderInput } />
        <Field label="Nama" name="Nama" component={ RenderInput } />
        <Field label="Gelar" name="Gelar" component={ RenderInput } />
        <Field label="Jenis Kelamin" name="Sex" component={ RenderInput } />
        <Field
            label="Tempat Lahir"
            name="TempatLahir"
            component={ RenderInput }
        />
        <Field label="Tgl Lahir" name="TglLahir" component={ RenderInput } />
        <Field
            label="Status"
            name="Status"
            component={ RenderSelect }
            options={ [
                { value: 0, label: "Belum Kawin" },
                { value: 1, label: "Kawin" }
            ] }
        />
        <Field
            label="Kewarganegaraan"
            name="Nationality"
            component={ RenderSelect }
            options={ [ { value: 0, label: "WNI" } ] }
        />
        <Field name="Agama" label="Agama" component={ RenderInput } />
        <Field name="phone" label="Telepone/Hp" component={ RenderInput } />
        <Field name="email" label="Email" component={ RenderInput } />
    </Content>
);

const IdentityForm = reduxForm( {
    form: "profileForm",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
} )( Identity );

export default connect()( IdentityForm );
