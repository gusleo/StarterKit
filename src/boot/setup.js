import * as Expo from "expo";
import React, { Component } from "react";
import { StyleProvider } from "native-base";
import { Provider } from "react-redux";

import configureStore from "../module/store/configureStore";
import rootSaga from "../module/sagas";
import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";

const roboto = require( "native-base/Fonts/Roboto.ttf" );
const robotomedium = require( "native-base/Fonts/Roboto_medium.ttf" );
const ionicons = require( "@expo/vector-icons/fonts/Ionicons.ttf" );

const store = configureStore( window.__INITIAL_STATE__ );
store.runSaga( rootSaga );

export default class Setup extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }
    componentWillMount() {
        this.loadFonts();
    }
    async loadFonts() {
        await Expo.Font.loadAsync( {
            Roboto: roboto,
            Roboto_medium: robotomedium,
            Ionicons: ionicons
        } );
        this.setState( { isReady: true } );
    }
    render() {
        if ( !this.state.isReady ) {
            return <Expo.AppLoading />;
        }
        return (
            <StyleProvider style={ getTheme( variables ) }>
                <Provider store={ store }>
                    <App />
                </Provider>
            </StyleProvider>
        );
    }
}
