import React, { Component } from "react";
import { Container, Content, Text } from "native-base";

import { AUTHORIZATION } from "../constants/screenNames";
import baseStyles from "../styles/baseStyles";

export default class Authorization extends Component {
  render() {
    const { center } = baseStyles;
    return (
      <Container>
        <Content contentContainerStyle={center}>
          <Text>{AUTHORIZATION}</Text>
        </Content>
      </Container>
    );
  }
}
