import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { StackNavigationProp } from "@react-navigation/stack";

import Meal from "../../types/meal";
import { AppDrawerParamList } from "../AppDrawer/types";
import { MealsFavsBottomTabsParamList } from "../MealsFavsBottomTabs/types";

export type FavoritesStackParamList = {
  FavoritesScreen: undefined;
  MealDetailScreen: { meal: Meal };
};

type ParentNavigatorsType = CompositeNavigationProp<
  BottomTabNavigationProp<MealsFavsBottomTabsParamList>,
  DrawerNavigationProp<AppDrawerParamList>
>;

export type FavoritesScreenNavProp = CompositeNavigationProp<
  StackNavigationProp<FavoritesStackParamList, "FavoritesScreen">,
  ParentNavigatorsType
>;

export type MealDetailScreenRouteProp = RouteProp<
  FavoritesStackParamList,
  "MealDetailScreen"
>;
export type MealDetailScreenNavProp = CompositeNavigationProp<
  StackNavigationProp<FavoritesStackParamList, "MealDetailScreen">,
  ParentNavigatorsType
>;
