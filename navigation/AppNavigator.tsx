import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";

import MealsNavigator from "./MealsNavigator/MealsNavigator";

const AppNavigator: FC = () => (
  <NavigationContainer>
    <MealsNavigator />
  </NavigationContainer>
);

export default AppNavigator;
