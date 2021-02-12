import React, { FC, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { FavoritesScreenNavProp } from "../navigation/FavoritesStack/types";
import MealList from "../components/MealList/MealList";
import AppHeaderButton from "../components/AppHeaderButton";
import { useAppSelector } from "../store";
import { selectFavoriteMeals } from "../store/reducers/meals";
import BodyText from "../components/Text/BodyText";

const FavoritesScreen: FC = () => {
  const navigation = useNavigation<FavoritesScreenNavProp>();

  const favMeals = useAppSelector(selectFavoriteMeals);

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

  if (favMeals.length === 0) {
    return (
      <View style={styles.emptyContent}>
        <BodyText>No favorite meals found. Start adding some!</BodyText>
      </View>
    );
  }
  return (
    <MealList
      meals={favMeals}
      onMealClicked={(meal) => {
        navigation.navigate("MealDetailScreen", { meal });
      }}
    />
  );
};

const styles = StyleSheet.create({
  emptyContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
