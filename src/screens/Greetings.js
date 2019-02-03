import React, { Component } from "react";
import { Container, Button, Text, Content } from "native-base";

import { GREETINGS, AUTHORIZATION } from "../constants/screenNames";
import baseStyles from "../styles/baseStyles";

export default class componentName extends Component {
  static displayName = GREETINGS;

  render() {
    const { center } = baseStyles;
    return (
      <Container>
        <Content contentContainerStyle={center}>
          <Button success onPress={this.navigateToAuthorization}>
            <Text>Welcome!</Text>
          </Button>
        </Content>
      </Container>
    );
  }

  navigateToAuthorization = () => {
    const {
      navigation: { navigate }
    } = this.props;
    navigate(AUTHORIZATION);
  };
}
