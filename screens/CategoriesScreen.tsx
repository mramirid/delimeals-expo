import React, { FC } from "react";
import { FlatList } from "react-native";
import { StackNavigationOptions } from "@react-navigation/stack";

import { CATEGORIES } from "../data/categories";
import CategoryItem from "../components/CategoryItem";

const CategoriesScreen: FC = () => (
  <FlatList
    numColumns={2}
    data={CATEGORIES}
    renderItem={(data) => <CategoryItem category={data.item} />}
  />
);

export const screenOptions: StackNavigationOptions = {
  headerTitle: "Meal Categories",
};

export default CategoriesScreen;
