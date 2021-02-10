import React, { FC, useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  CategoryMealsScreenNavProp,
  CategoryMealsScreenRouteProp,
} from "../navigation/MealsNavigator/types";
import { MEALS } from "../data/meals";
import MealItem from "../components/MealItem";

const CategoryMealsScreen: FC = () => {
  const navigation = useNavigation<CategoryMealsScreenNavProp>();
  const { params } = useRoute<CategoryMealsScreenRouteProp>();

  const meals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(params.category.id) >= 0;
  });

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: params.category.id });
  }, [navigation, params.category.id]);

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        data={meals}
        renderItem={(data) => (
          <MealItem
            meal={data.item}
            onClick={() => navigation.navigate("MealDetailScreen")}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 15,
  },
});

export default CategoryMealsScreen;
