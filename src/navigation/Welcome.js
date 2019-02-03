import { createSwitchNavigator } from "react-navigation";
import { Greeting, Authorization } from "../screens";

export default createSwitchNavigator(
  {
    Greetings,
    Authorization
  },
  {
    initialRouteName: Greeting.displayName
  }
);
