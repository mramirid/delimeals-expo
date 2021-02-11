import React, { FC, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  CategoryMealsScreenNavProp,
  CategoryMealsScreenRouteProp,
} from "../navigation/MealsStack/types";
import { MEALS } from "../data/meals";
import MealList from "../components/MealList/MealList";

const CategoryMealsScreen: FC = () => {
  const navigation = useNavigation<CategoryMealsScreenNavProp>();
  const { params } = useRoute<CategoryMealsScreenRouteProp>();

  const meals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(params.category.id) >= 0;
  });

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: params.category.title });
  }, [navigation, params.category.title]);

  return (
    <MealList
      meals={meals}
      onMealClicked={(meal) => {
        navigation.navigate("MealDetailScreen", { meal });
      }}
    />
  );
};

export default CategoryMealsScreen;
