// @flow
import React, { PureComponent, type Element } from "react";
import { View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import type { SlideType } from "./type";

type PropsType = {
    renderItem: ( item: SlideType, index: number ) => Element<*>
};
type StaticType = {
    entries: Array<SlideType>,
    activeSlide: number
};

export default class SlideShow extends PureComponent<PropsType, StaticType> {
    pagination() {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={ entries.length }
                activeDotIndex={ activeSlide }
                containerStyle={ { backgroundColor: "rgba(0, 0, 0, 0.75)" } }
                dotStyle={ {
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: "rgba(255, 255, 255, 0.92)"
                } }
                inactiveDotStyle={
                    {
                        // Define styles for inactive dots here
                    }
                }
                inactiveDotOpacity={ 0.4 }
                inactiveDotScale={ 0.6 }
            />
        );
    }

    render() {
        return (
            <View>
                <Carousel
                    data={ this.state.entries }
                    renderItem={ this.props.renderItem }
                    onSnapToItem={ index =>
                        this.setState( { activeSlide: index } )
                    }
                />
                {this.pagination}
            </View>
        );
    }
}
