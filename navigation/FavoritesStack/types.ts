import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import Meal from "../../models/Meal";

export type MealsStackParamList = {
  FavoritesScreen: undefined;
  MealDetailScreen: { meal: Meal };
};

export type FavoritesScreenRouteProp = RouteProp<
  MealsStackParamList,
  "FavoritesScreen"
>;
export type MealDetailScreenRouteProp = RouteProp<
  MealsStackParamList,
  "MealDetailScreen"
>;

export type FavoritesScreenNavProp = StackNavigationProp<
  MealsStackParamList,
  "FavoritesScreen"
>;
export type MealDetailScreenNavProp = StackNavigationProp<
  MealsStackParamList,
  "MealDetailScreen"
>;
