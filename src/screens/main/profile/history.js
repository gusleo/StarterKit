// @flow
import React from "react";
import { Content } from "native-base";
import { HtmlWrapper } from "@components";

const html = "<ul><li>Prestasi Pertama</li><li>Prestasi Kedua</li></ul>";
export default () => (
    <Content padder>
        <HtmlWrapper html={ html } />
    </Content>
);
