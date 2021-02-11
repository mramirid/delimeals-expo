import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MealsStackParamList } from "./types";
import FavoritesScreen from "../../screens/FavoritesScreen";
import MealDetailScreen from "../../screens/MealDetailScreen";
import { defaultStackScreenOptions } from "../constants";

const Stack = createStackNavigator<MealsStackParamList>();

const FavoritesStack: FC = () => (
  <Stack.Navigator screenOptions={defaultStackScreenOptions}>
    <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
    <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
  </Stack.Navigator>
);

export default FavoritesStack;
