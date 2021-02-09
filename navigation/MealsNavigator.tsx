import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsStackNavigator = createStackNavigator();

const MealsNavigator: FC = () => (
  <MealsStackNavigator.Navigator>
    <MealsStackNavigator.Screen
      name="Categories"
      component={CategoriesScreen}
    />
    <MealsStackNavigator.Screen
      name="Category Meals"
      component={CategoryMealsScreen}
    />
    <MealsStackNavigator.Screen
      name="Meal Detail"
      component={MealDetailScreen}
    />
  </MealsStackNavigator.Navigator>
);

export default MealsNavigator;
