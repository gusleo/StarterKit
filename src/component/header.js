import React, { Component } from "react";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { Header, Button, Icon, Left, Body, Right } from "native-base";

type Props = {
  useBackButton?: boolean,
  hasTabs?: boolean,
  title: string,
  navigation: NavigationScreenProp<NavigationState, *>
};

type State = {};

class Header extends Component<Props, State> {
  _backButtonPress() {
    console.log("back button press");
  }
  _renderRightMenu() {
    return <Right />;
  }
  _renderLeftMenu() {
    let { useBackButton } = this.props;
    if (!useBackButton) {
      return (
        <Button
          transparent
          onPress={() => this.props.navigation.navigate("DrawerOpen")}
        >
          <Icon name="menu" />
        </Button>
      );
    } else {
      return (
        <Button transparent onPress={() => this._backButtonPress()}>
          <Icon name="arrow-back" />
        </Button>
      );
    }
  }

  render() {
    return (
      <Header hasTabs={this.props.hasTabs}>
        <Left>{this._renderLeftMenu()}</Left>

        <Body>
          <Title>{this.props.title}</Title>
        </Body>

        {this._renderRightMenu()}
      </Header>
    );
  }
}

Header.defaultProps = {
  useBackButton: false
};

export default Header;
