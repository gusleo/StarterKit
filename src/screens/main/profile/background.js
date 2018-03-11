import React from "react";

import { reduxForm, Field } from "redux-form";
import { Content } from "native-base";
import { connect } from "react-redux";
import { RenderInput, SubHeader } from "@components";

const Background = () => (
    <Content padder>
        
        <SubHeader title="Pendidikan Sekolah Dasar" />

        <Field
            name="ElementarySchoolName"
            label="Nama Sekolah"
            component={ RenderInput }
        />
        <Field
            name="ElementarySchoolAddress"
            label="Alamat"
            component={ RenderInput }
        />
        <Field
            name="ElementarySchoolGradute"
            label="Tahun Tamat"
            component={ RenderInput }
        />
        <SubHeader title="Pendidikan SMP/SLTP" />
        <Field
            name="JuniorHightSchoolName"
            label="Nama Sekolah"
            component={ RenderInput }
        />
        <Field
            name="JuniorHightSchoolAddress"
            label="Alamat"
            component={ RenderInput }
        />
        <Field
            name="JuniorHightSchoolGraduate"
            label="Tahun Tamat"
            component={ RenderInput }
        />
        <SubHeader title="Pendidikan SMA/SLTA" />
        <Field
            name="SeniorHightSchoolName"
            label="Nama Sekolah"
            component={ RenderInput }
        />
        <Field
            name="SeniorHightSchoolAddress"
            label="Alamat"
            component={ RenderInput }
        />
        <Field
            name="SeniorHightSchoolGraduate"
            label="Tahun Tamat"
            component={ RenderInput }
        />
        <SubHeader title="Pendidikan Perguruan Tinggi (S1)" />
        <Field
            name="UniversityName"
            label="Nama Universitas"
            component={ RenderInput }
        />
        <Field
            name="UniversityBachelorDegree"
            label="Jurusan"
            component={ RenderInput }
        />
        <Field
            name="UniversityAddress"
            label="Alamat"
            component={ RenderInput }
        />

        <Field
            name="UniversityGraduateYear"
            label="Tahun Tamat"
            component={ RenderInput }
        />
        <SubHeader title="Pendidikan Perguruan Tinggi (S2)" />
        <Field
            name="UniversityMasterName"
            label="Nama Universitas"
            component={ RenderInput }
        />
        <Field
            name="UniversityMasterDegree"
            label="Jurusan"
            component={ RenderInput }
        />
        <Field
            name="UniversityMasterAddress"
            label="Alamat"
            component={ RenderInput }
        />

        <Field
            name="UniversityMasterGraduateYear"
            label="Tahun Tamat"
            component={ RenderInput }
        />
    </Content>
);

const BackgroundForm = reduxForm( {
    form: "profileForm",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
} )( Background );

export default connect()( BackgroundForm );
