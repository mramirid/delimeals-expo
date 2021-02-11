import React, { FC, useLayoutEffect } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { CATEGORIES } from "../data/categories";
import CategoryGridItem from "../components/CategoryGridItem";
import { CategoriesScreenNavProp } from "../navigation/MealsStack/types";
import AppHeaderButton from "../components/AppHeaderButton";

const CategoriesScreen: FC = () => {
  const navigation = useNavigation<CategoriesScreenNavProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Meal Categories",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
          <Item
            title="Menu"
            iconName="menu"
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
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
