import React, { PureComponent } from "react";
import { WebView, StyleSheet, Dimensions } from "react-native";

const deviceHeight = Dimensions.get( "window" ).height;
const deviceWidth = Dimensions.get( "window" ).width;

const styles = StyleSheet.create( {
    webContainer: {
        width: deviceWidth,
        height: deviceHeight
    }
} );
export default class ELearning extends PureComponent<*, *> {
    static navigationOptions = {
        title: "E-Learning"
    };
    render() {
        return (
            <WebView
                javaScriptEnabled
                domStorageEnabled
                source={ { uri: "https://classroom.google.com/" } }
                scalesPageToFit
                startInLoadingState
                style={ styles.webContainer }
            />
        );
    }
}
