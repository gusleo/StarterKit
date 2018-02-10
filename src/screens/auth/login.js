import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { Container, Button, Text, Spinner } from "native-base";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { FancyIcon, Wallpaper } from "../../component";
import styles from "./styles";

type Props = {
    navigation: NavigationScreenProp<NavigationState, *>
};

type State = {
    username: string,
    password: string
};
class Login extends Component<Props, State> {
    state = {
        username: "",
        password: ""
    };
    loginhandler() {
        console.log( this.state );
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
                        <FancyIcon placeholder="Username" icon="mail" />
                        <FancyIcon
                            placeholder="Password"
                            icon="unlock"
                            password
                        />
                        <Button
                            block
                            rounded
                            warning
                            onPress={ () => this.loginHandler() }
                        >
                            {button}
                        </Button>
                    </View>

                    <View style={ { marginBottom: 80 } }>
                        <Button
                            style={ {
                                backgroundColor: "#6FAF98",
                                alignSelf: "center"
                            } }
                            onPress={ () =>
                                this.props.navigation.navigate( "DrawerOpen" )
                            }
                        >
                            <Text>Lets Go!</Text>
                        </Button>
                    </View>
                </Wallpaper>
            </Container>
        );
    }
}

export default Login;
