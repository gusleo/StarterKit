const React = require( "react-native" );

const { StyleSheet, Dimensions, PixelRatio } = React;
const { width } = Dimensions.get( "screen" );

export default StyleSheet.create( {
    label: {
        width: 150
    },
    stackedlabel: {
        fontSize: 17
    },
    groupContainerHorizontal: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        height: 50
    },
    groupContainerVertical: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start"
    },
    textArea: {
        flex: 1,
        flexDirection: "column",
        paddingTop: 10
    },
    styleTextArea: {
        borderColor: "#CCC",
        borderWidth: 0.5,
        margin: 5
    },
    simple: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 10
    },
    error: {
        fontSize: 12,
        color: "red"
    },
    /** Need explore more for picker on iOS */
    pickerStack: {
        width: PixelRatio.getPixelSizeForLayoutSize( width ) / 2
    },
    pickerInline: {
        flex: 1
    }
} );
