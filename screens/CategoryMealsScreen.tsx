import React, { FC } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack";

import {
  CategoryMealsScreenNavProp,
  CategoryMealsScreenRouteProp,
} from "../navigation/MealsNavigator/types";
import { CATEGORIES } from "../data/categories";

const CategoryMealsScreen: FC = () => {
  const navigation = useNavigation<CategoryMealsScreenNavProp>();
  const route = useRoute<CategoryMealsScreenRouteProp>();

  const category = CATEGORIES.find((category) => {
    return category.id === route.params.categoryId;
  });

  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen</Text>
      <Text>{category?.title}</Text>
      <Button
        title="GOTO DETAIL MEAL"
        onPress={() => navigation.navigate("MealDetailScreen")}
      />
      <Button title="GO BACK" onPress={() => navigation.pop()} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const screenOptions: StackNavigationOptions = {
  headerTitle: "Meals",
};

export default CategoryMealsScreen;
