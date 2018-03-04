// @flow
import React, { PureComponent } from "react";
import { View, StatusBar } from "react-native";
import { Container, Button, Text, Spinner } from "native-base";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { FancyInput, Wallpaper } from "@components";

import styles from "./styles";

type PropsType = {
    navigation: NavigationScreenProp<NavigationState, *>
};

type StateType = {
    username: string,
    password: string
};
class Login extends PureComponent<PropsType, StateType> {
    static navigationOptions = {
        title: "Log In"
    };
    loginHandler() {
        this.props.navigation.navigate( "Main" );
    }
    render() {
        const isLoading = false;
        const button = !isLoading ? (
            <Text>Get Started</Text>
        ) : (
            <Spinner color="white" />
        );
        return (
            <Container>
                <StatusBar barStyle="light-content" />
                <Wallpaper useDefaultLogo>
                    <View style={ styles.loginForm }>
                        <FancyInput placeholder="Username" icon="mail" />
                        <FancyInput
                            placeholder="Password"
                            icon="unlock"
                            password
                        />
                        <Button
                            block
                            rounded
                            onPress={ () => this.loginHandler() }
                        >
                            {button}
                        </Button>
                    </View>
                </Wallpaper>
            </Container>
        );
    }
}

export default Login;
