import React, { FC, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  CategoryMealsScreenNavProp,
  CategoryMealsScreenRouteProp,
} from "../navigation/MealsStack/types";
import MealList from "../components/MealList/MealList";
import { useAppSelector } from "../store/types";
import BodyText from "../components/Text/BodyText";
import { selectFilteredMeals } from "../store/reducers/meals";

const CategoryMealsScreen: FC = () => {
  const navigation = useNavigation<CategoryMealsScreenNavProp>();
  const { params } = useRoute<CategoryMealsScreenRouteProp>();

  const meals = useAppSelector(selectFilteredMeals);
  const categoryMeals = meals.filter((meal) => {
    return meal.categoryIds.indexOf(params.category.id) >= 0;
  });

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: params.category.title });
  }, [navigation, params.category.title]);

  if (categoryMeals.length === 0) {
    return (
      <View style={styles.emptyContent}>
        <BodyText>No meals available. Maybe check your filters?</BodyText>
      </View>
    );
  }
  return (
    <MealList
      meals={categoryMeals}
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

export default CategoryMealsScreen;
