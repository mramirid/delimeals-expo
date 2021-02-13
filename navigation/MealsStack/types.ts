import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import Category from "../../types/category";
import Meal from "../../types/meal";
import { AppDrawerParamList } from "../AppDrawer/types";
import { MealsFavsBottomTabsParamList } from "../MealsFavsBottomTabs/types";

export type MealsStackParamList = {
  CategoriesScreen: undefined;
  CategoryMealsScreen: { category: Category };
  MealDetailScreen: { meal: Meal };
};

type ParentNavigatorsType = CompositeNavigationProp<
  BottomTabNavigationProp<MealsFavsBottomTabsParamList>,
  DrawerNavigationProp<AppDrawerParamList>
>;

export type CategoriesScreenNavProp = CompositeNavigationProp<
  StackNavigationProp<MealsStackParamList, "CategoriesScreen">,
  ParentNavigatorsType
>;

export type CategoryMealsScreenRouteProp = RouteProp<
  MealsStackParamList,
  "CategoryMealsScreen"
>;
export type CategoryMealsScreenNavProp = CompositeNavigationProp<
  StackNavigationProp<MealsStackParamList, "CategoryMealsScreen">,
  ParentNavigatorsType
>;

export type MealDetailScreenRouteProp = RouteProp<
  MealsStackParamList,
  "MealDetailScreen"
>;
export type MealDetailScreenNavProp = CompositeNavigationProp<
  StackNavigationProp<MealsStackParamList, "MealDetailScreen">,
  ParentNavigatorsType
>;
