import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useScreens } from "react-native-screens";
import Config from "react-native-config";

import { DEVELOPMENT } from "./constants/environmentNames";

useScreens();

const { NODE_ENV } = Config;
if (NODE_ENV === DEVELOPMENT) {
  console.tron = require("../ReactotronConfig").default;
  console.tron.clear();
  console.tron.log("HELLO!");
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
