import React, { FC, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { FavoritesScreenNavProp } from "../navigation/FavoritesStack/types";
import MealList from "../components/MealList/MealList";
import AppHeaderButton from "../components/AppHeaderButton";
import { useAppSelector } from "../store";
import { selectFavoriteMeals } from "../store/reducers/meals";

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

  const favMeals = useAppSelector(selectFavoriteMeals);

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
