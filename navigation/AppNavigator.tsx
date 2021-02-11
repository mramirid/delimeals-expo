import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomeBottomTabs from "./HomeBottomTabs/HomeBottomTabs";

const AppNavigator: FC = () => (
  <NavigationContainer>
    <HomeBottomTabs />
  </NavigationContainer>
);

export default AppNavigator;
