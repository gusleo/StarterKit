// @flow
import React, { Component } from "react";
import { View } from "react-native";
import Slideshow from "react-native-slideshow";
import type { SlideType } from "./type";

type PropsType = {
    dataSource: Array<SlideType>,
    duration?: number
};
type StateType = {
    interval: number,
    position: number
};

export default class ImageCarosel extends Component<PropsType, StateType> {
    static defaultProps = {
        duration: 2000,
        dataSource: []
    };
    static state = {
        posisition: 1,
        interval: 0
    };
    componentDidMount() {
        if ( this.props.dataSource ) {
            this.setState( {
                interval: setInterval( () => {
                    this.setState( {
                        position:
                            this.state.position === this.props.dataSource.length
                                ? 0
                                : this.state.position + 1
                    } );
                }, this.props.duration )
            } );
        }
    }

    componentWillUnmount() {
        clearInterval( this.state.interval );
    }

    render() {
        <Slideshow
            dataSource={ this.props.dataSource }
            position={ this.state.position }
            onPositionChanged={ position => this.setState( { position } ) }
        />;
    }
}
