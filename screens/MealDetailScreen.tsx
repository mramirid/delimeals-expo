import React, { FC, useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import {
  MealDetailScreenNavProp,
  MealDetailScreenRouteProp,
} from "../navigation/MealsStack/types";
import AppHeaderButton from "../components/AppHeaderButton";

const MealDetailScreen: FC = () => {
  const navigation = useNavigation<MealDetailScreenNavProp>();
  const { params } = useRoute<MealDetailScreenRouteProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.meal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
          <Item
            title="Favorite"
            iconName="star"
            onPress={() => {
              // eslint-disable-next-line no-console
              console.log("Marked as favorite");
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, params.meal.title]);

  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen</Text>
      <Button
        title="GO BACK TO CATEGORIES"
        onPress={() => navigation.popToTop()}
      />
      <Button title="GO BACK TO MEALS" onPress={() => null} />
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

export default MealDetailScreen;
