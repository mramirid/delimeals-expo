import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import Meal from "../../models/Meal";
import { FavoritesStackNavProp } from "../MealsFavsBottomTabs/types";

export type FavoritesStackParamList = {
  FavoritesScreen: undefined;
  MealDetailScreen: { meal: Meal };
};

export type FavoritesScreenNavProp = CompositeNavigationProp<
  StackNavigationProp<FavoritesStackParamList, "FavoritesScreen">,
  FavoritesStackNavProp
>;

export type MealDetailScreenRouteProp = RouteProp<
  FavoritesStackParamList,
  "MealDetailScreen"
>;
export type MealDetailScreenNavProp = CompositeNavigationProp<
  StackNavigationProp<FavoritesStackParamList, "MealDetailScreen">,
  FavoritesStackNavProp
>;
