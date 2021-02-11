import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppBottomTabs from "./AppBottomTabs/AppBottomTabs";

const AppNavigator: FC = () => (
  <NavigationContainer>
    <AppBottomTabs />
  </NavigationContainer>
);

export default AppNavigator;
