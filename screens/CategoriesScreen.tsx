import React, { FC, useLayoutEffect } from "react";
import { FlatList } from "react-native";

import { CATEGORIES } from "../data/categories";
import CategoryItem from "../components/CategoryItem";
import { useNavigation } from "@react-navigation/native";
import { CategoriesScreenNavProp } from "../navigation/MealsNavigator/types";

const CategoriesScreen: FC = () => {
  const navigation = useNavigation<CategoriesScreenNavProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Meal Categories",
    });
  }, [navigation]);

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={(data) => <CategoryItem category={data.item} />}
    />
  );
};

export default CategoriesScreen;
