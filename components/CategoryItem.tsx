import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import Category from "../models/Category";
import { CategoriesScreenNavProp } from "../navigation/MealsNavigator/types";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  const navigation = useNavigation<CategoriesScreenNavProp>();
  return (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => {
        navigation.navigate("CategoryMealsScreen", {
          categoryId: category.id,
        });
      }}>
      <Text>{category.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoryItem;
