import React, { FC } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CategoryMealsScreenNavProp } from "../navigation/MealsNavigator/types";

const CategoryMealsScreen: FC = () => {
  const navigation = useNavigation<CategoryMealsScreenNavProp>();
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen</Text>
      <Button
        title="GOTO DETAIL MEAL"
        onPress={() => navigation.navigate("MealDetailScreen")}
      />
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

export default CategoryMealsScreen;
