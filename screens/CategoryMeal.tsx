import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

interface CategoryMealScreenProps {}

const CategoryMealScreen: FC<CategoryMealScreenProps> = (props) => (
  <View>
    <Text>The Category Meal Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
