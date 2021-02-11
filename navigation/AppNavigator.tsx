import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppDrawer from "./AppDrawer/AppDrawer";

const AppNavigator: FC = () => (
  <NavigationContainer>
    <AppDrawer />
  </NavigationContainer>
);

export default AppNavigator;
