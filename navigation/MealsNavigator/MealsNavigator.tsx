import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MealsStackParamList } from "./types";
import CategoriesScreen from "../../screens/CategoriesScreen";
import CategoryMealsScreen from "../../screens/CategoryMealsScreen";
import MealDetailScreen from "../../screens/MealDetailScreen";

const MealsStackNavigator = createStackNavigator<MealsStackParamList>();

const MealsNavigator: FC = () => (
  <MealsStackNavigator.Navigator>
    <MealsStackNavigator.Screen
      name="CategoriesScreen"
      component={CategoriesScreen}
    />
    <MealsStackNavigator.Screen
      name="CategoryMealsScreen"
      component={CategoryMealsScreen}
    />
    <MealsStackNavigator.Screen
      name="MealDetailScreen"
      component={MealDetailScreen}
    />
  </MealsStackNavigator.Navigator>
);

export default MealsNavigator;
