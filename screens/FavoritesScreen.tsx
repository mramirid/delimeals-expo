import React, { FC, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { FavoritesScreenNavProp } from "../navigation/FavoritesStack/types";
import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/meals";

const FavoritesScreen: FC = () => {
  const navigation = useNavigation<FavoritesScreenNavProp>();

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: "Your Favorites" });
  }, [navigation]);

  const favMeals = MEALS.filter((meal) => {
    return meal.id === "m1" || meal.id === "m2";
  });

  return (
    <MealList
      meals={favMeals}
      onMealClicked={(meal) => {
        navigation.navigate("MealDetailScreen", { meal });
      }}
    />
  );
};

export default FavoritesScreen;
