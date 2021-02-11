import React, { FC, useLayoutEffect } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CATEGORIES } from "../data/categories";
import CategoryGridItem from "../components/CategoryGridItem";
import { CategoriesScreenNavProp } from "../navigation/MealsStack/types";

const CategoriesScreen: FC = () => {
  const navigation = useNavigation<CategoriesScreenNavProp>();

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: "Meal Categories" });
  }, [navigation]);

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={(data) => (
        <CategoryGridItem
          category={data.item}
          onClick={() => {
            navigation.navigate("CategoryMealsScreen", { category: data.item });
          }}
        />
      )}
    />
  );
};

export default CategoriesScreen;
