import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import Category from "../../models/Category";
import Meal from "../../models/Meal";
import { MealsStackNavProp } from "../MealsFavsBottomTabs/types";

export type MealsStackParamList = {
  CategoriesScreen: undefined;
  CategoryMealsScreen: { category: Category };
  MealDetailScreen: { meal: Meal };
};

export type CategoriesScreenNavProp = CompositeNavigationProp<
  StackNavigationProp<MealsStackParamList, "CategoriesScreen">,
  MealsStackNavProp
>;

export type CategoryMealsScreenRouteProp = RouteProp<
  MealsStackParamList,
  "CategoryMealsScreen"
>;
export type CategoryMealsScreenNavProp = CompositeNavigationProp<
  StackNavigationProp<MealsStackParamList, "CategoryMealsScreen">,
  MealsStackNavProp
>;

export type MealDetailScreenRouteProp = RouteProp<
  MealsStackParamList,
  "MealDetailScreen"
>;
export type MealDetailScreenNavProp = CompositeNavigationProp<
  StackNavigationProp<MealsStackParamList, "MealDetailScreen">,
  MealsStackNavProp
>;
