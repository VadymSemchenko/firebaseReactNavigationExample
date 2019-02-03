import React, { Component } from "react";
import { useScreens } from "react-native-screens";
import Config from "react-native-config";
import { createAppContainer } from "react-navigation";

import { DEVELOPMENT } from "./constants/environmentNames";
import NavigationService from "./navigation/NavigationService";
import WelcomeSwitchNavigator from "./navigation/Welcome";

/* Description: https://github.com/kmagiera/react-native-screens */
useScreens();

/* Reassigning default "__DEV__" variable
and adding Reactotron
to default console to avoid
importing Reactotron to each file,
where we need to use it */
const { NODE_ENV } = Config;
__DEV__ = NODE_ENV === DEVELOPMENT;
if (__DEV__) {
  console.tron = require("../ReactotronConfig").default;
  console.tron.clear();
}

export default () => {
  const AppContainer = createAppContainer(WelcomeSwitchNavigator);
  return (
    <AppContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  );
};
