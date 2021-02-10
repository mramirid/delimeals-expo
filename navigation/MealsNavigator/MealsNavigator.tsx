import React, { FC } from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";

import { MealsStackParamList } from "./types";
import Colors from "../../constants/colors";
import CategoriesScreen from "../../screens/CategoriesScreen";
import CategoryMealsScreen from "../../screens/CategoryMealsScreen";
import MealDetailScreen from "../../screens/MealDetailScreen";

const MealsStackNavigator = createStackNavigator<MealsStackParamList>();

const mealsStackscreenOptions: StackNavigationOptions = {
  headerTintColor: Platform.OS === "android" ? "white" : undefined,
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.Primary : undefined,
  },
};

const MealsNavigator: FC = () => (
  <MealsStackNavigator.Navigator
    mode="modal"
    screenOptions={mealsStackscreenOptions}>
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
