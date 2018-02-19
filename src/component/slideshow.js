// @flow
import React, { Component } from "react";
import SliderImage from "react-native-slideshow";
import type { SlideType } from "./type";

type PropsType = {
    dataSource: Array<SlideType>,
    duration?: number
};
type StateType = {
    interval: number,
    position: number
};

export default class Slideshow extends Component<PropsType, StateType> {
    static defaultProps = {
        duration: 2000
    };
    static state = {
        posisition: 1
    };
    componentWillMount() {
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

    componentWillUnmount() {
        clearInterval( this.state.interval );
    }

    render() {
        return (
            <SliderImage
                dataSource={ this.props.dataSource }
                position={ this.state.position }
                onPositionChanged={ position => this.setState( { position } ) }
            />
        );
    }
}
