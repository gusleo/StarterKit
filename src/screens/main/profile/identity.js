// @flow
import React from "react";
import { View } from "react-native";
import { reduxForm, Field } from "redux-form";
import { Content } from "native-base";
import { connect } from "react-redux";
import {
    Avatar,
    RenderInput,
    RenderSelect,
    RenderDatePicker,
    SubHeader
} from "@components";
import styles from "./styles";

const Identity = () => (
    <Content padder>
        <View style={ styles.center }>
            <Avatar size="large" source="" />
        </View>
        <Field label="NIP" name="Nip" component={ RenderInput } />
        <Field label="Nama" name="Nama" component={ RenderInput } />
        <Field label="Alamat" name="Alamat" component={ RenderInput } />
        <Field label="Gelar" name="Gelar" component={ RenderInput } />
        <Field
            label="Gender"
            name="Gender"
            component={ RenderSelect }
            options={ [
                { value: 0, label: "Laki - Laki" },
                { value: 1, label: "Perempuan" }
            ] }
        />
        <Field
            label="Tempat Lahir"
            name="TempatLahir"
            component={ RenderInput }
        />
        <Field label="Tgl Lahir" name="TglLahir" component={ RenderDatePicker } />
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
        <Field
            label="Agama"
            name="Religion"
            component={ RenderSelect }
            options={ [
                { value: 0, label: "Hindu" },
                { value: 1, label: "Islam" },
                { value: 3, label: "Kristen Katolik" },
                { value: 4, label: "Kristen Protestan" },
                { value: 5, label: "Budha" },
                { value: 6, label: "Konghucu" }
            ] }
        />
        <Field name="phone" label="Telepone/Hp" component={ RenderInput } />
        <Field name="email" label="Email" component={ RenderInput } />

        <SubHeader title="Jabatan" />
        <Field name="NIDN" label="NIDN" component={ RenderInput } />
        <Field name="Jabatan" label="Jabatan" component={ RenderInput } />
       
    </Content>
);

const IdentityForm = reduxForm( {
    form: "profileForm",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
} )( Identity );

export default connect()( IdentityForm );
