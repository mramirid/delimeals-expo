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

const Stack = createStackNavigator<MealsStackParamList>();

const stackScreenOptions: StackNavigationOptions = {
  headerTintColor: Platform.OS === "android" ? "white" : undefined,
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.Primary : undefined,
  },
};

const MealsStack: FC = () => (
  <Stack.Navigator screenOptions={stackScreenOptions}>
    <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
    <Stack.Screen name="CategoryMealsScreen" component={CategoryMealsScreen} />
    <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
  </Stack.Navigator>
);

export default MealsStack;
