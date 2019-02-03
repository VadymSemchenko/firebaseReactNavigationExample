import { createSwitchNavigator } from "react-navigation";
import { Greetings, Authorization } from "../screens";

export default createSwitchNavigator(
  {
    Greetings,
    Authorization
  },
  {
    initialRouteName: Greetings.displayName
  }
);
