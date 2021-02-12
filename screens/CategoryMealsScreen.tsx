import React, { FC, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  CategoryMealsScreenNavProp,
  CategoryMealsScreenRouteProp,
} from "../navigation/MealsStack/types";
import MealList from "../components/MealList/MealList";
import { useAppSelector } from "../store";
import { selectFilteredMeals } from "../store/reducers/meals";

const CategoryMealsScreen: FC = () => {
  const navigation = useNavigation<CategoryMealsScreenNavProp>();
  const { params } = useRoute<CategoryMealsScreenRouteProp>();

  const meals = useAppSelector(selectFilteredMeals);
  const displayedMeals = meals.filter((meal) => {
    return meal.categoryIds.indexOf(params.category.id) >= 0;
  });

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: params.category.title });
  }, [navigation, params.category.title]);

  return (
    <MealList
      meals={displayedMeals}
      onMealClicked={(meal) => {
        navigation.navigate("MealDetailScreen", { meal });
      }}
    />
  );
};

export default CategoryMealsScreen;
