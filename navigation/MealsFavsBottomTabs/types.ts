import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";

import { MealsFavsBottomTabsNavProp } from "../AppDrawer/types";

export type MealsFavsBottomTabsParamList = {
  MealsStack: undefined;
  FavoritesStack: undefined;
};

export type MealsStackNavProp = CompositeNavigationProp<
  BottomTabNavigationProp<MealsFavsBottomTabsParamList, "MealsStack">,
  MealsFavsBottomTabsNavProp
>;

export type FavoritesStackNavProp = CompositeNavigationProp<
  BottomTabNavigationProp<MealsFavsBottomTabsParamList, "FavoritesStack">,
  MealsFavsBottomTabsNavProp
>;
