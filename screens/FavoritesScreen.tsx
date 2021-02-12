import React, { FC, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { FavoritesScreenNavProp } from "../navigation/FavoritesStack/types";
import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/meals";
import AppHeaderButton from "../components/AppHeaderButton";

const FavoritesScreen: FC = () => {
  const navigation = useNavigation<FavoritesScreenNavProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Your Favorites",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
          <Item
            title="Menu"
            iconName="menu"
            onPress={navigation.toggleDrawer}
          />
        </HeaderButtons>
      ),
    });
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
