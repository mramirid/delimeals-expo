import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type MealsStackParamList = {
  CategoriesScreen: undefined;
  CategoryMealsScreen: undefined;
  MealDetailScreen: undefined;
};

export type CategoriesScreenRouteProp = RouteProp<
  MealsStackParamList,
  "CategoriesScreen"
>;
export type CategoryMealsScreenRouteProp = RouteProp<
  MealsStackParamList,
  "CategoryMealsScreen"
>;
export type MealDetailScreenRouteProp = RouteProp<
  MealsStackParamList,
  "MealDetailScreen"
>;

export type CategoriesScreenNavProp = StackNavigationProp<
  MealsStackParamList,
  "CategoriesScreen"
>;
export type CategoryMealsScreenNavProp = StackNavigationProp<
  MealsStackParamList,
  "CategoryMealsScreen"
>;
export type MealDetailScreenNavProp = StackNavigationProp<
  MealsStackParamList,
  "MealDetailScreen"
>;
