import React, { FC } from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";

import { MealsStackParamList } from "./types";
import Colors from "../../constants/colors";
import CategoriesScreen, {
  screenOptions as categoriesScreenOptions,
} from "../../screens/CategoriesScreen";
import CategoryMealsScreen, {
  screenOptions as categoryMealsScreenOptions,
} from "../../screens/CategoryMealsScreen";
import MealDetailScreen, {
  screenOptions as mealDetailScreenOptions,
} from "../../screens/MealDetailScreen";

const MealsStackNavigator = createStackNavigator<MealsStackParamList>();

const mealsStackscreenOptions: StackNavigationOptions = {
  headerTintColor: Platform.OS === "android" ? "white" : undefined,
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.Primary : undefined,
  },
};

const MealsNavigator: FC = () => (
  <MealsStackNavigator.Navigator screenOptions={mealsStackscreenOptions}>
    <MealsStackNavigator.Screen
      name="CategoriesScreen"
      component={CategoriesScreen}
      options={categoriesScreenOptions}
    />
    <MealsStackNavigator.Screen
      name="CategoryMealsScreen"
      component={CategoryMealsScreen}
      options={categoryMealsScreenOptions}
    />
    <MealsStackNavigator.Screen
      name="MealDetailScreen"
      component={MealDetailScreen}
      options={mealDetailScreenOptions}
    />
  </MealsStackNavigator.Navigator>
);

export default MealsNavigator;
