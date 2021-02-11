import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { FiltersStackParamList } from "./types";
import { defaultStackScreenOptions } from "../constants";
import FiltersScreen from "../../screens/FiltersScreen";

const Stack = createStackNavigator<FiltersStackParamList>();

const FiltersStack: FC = () => (
  <Stack.Navigator screenOptions={defaultStackScreenOptions}>
    <Stack.Screen name="FiltersScreen" component={FiltersScreen} />
  </Stack.Navigator>
);

export default FiltersStack;
