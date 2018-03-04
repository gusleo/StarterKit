// @flow
import React, { PureComponent } from "react";
import { WebView, View } from "react-native";
import { Spinner } from "native-base";

const script = `
<script>
	window.location.hash = 1;
    var calculator = document.createElement("div");
    calculator.id = "height-calculator";
    while (document.body.firstChild) {
        calculator.appendChild(document.body.firstChild);
    }
	document.body.appendChild(calculator);
    document.title = calculator.scrollHeight;
</script>
`;
const style = `
<style>
body, html, #height-calculator {
    margin: 0;
    padding: 0;
    font-size: 11px;
    color: #707070;
}
#height-calculator {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
</style>
`;

type PropType = {
    html: string
};
type StateType = {
    height: number
};

export default class HtmlWrapper extends PureComponent<PropType, StateType> {
    state = {
        height: 0
    };

    onNavigationChange( event: any ) {
        if ( event.title ) {
            const htmlHeight = Number( event.title ); // convert to number
            this.setState( { height: htmlHeight } );
        }
    }
    render() {
        const { height } = this.state;
        const { html } = this.props;

        return (
            <View>
                {height <= 0 && <Spinner color="orange" />}

                <WebView
                    scrollEnabled={ false }
                    source={ { html: html + style + script } }
                    style={ { height } }
                    javaScriptEnabled
                    onNavigationStateChange={ event =>
                        this.onNavigationChange( event )
                    }
                />
            </View>
        );
    }
}
