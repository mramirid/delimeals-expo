import React, { FC, useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { MealDetailScreenNavProp } from "../navigation/MealsNavigator/types";

const MealDetailScreen: FC = () => {
  const navigation = useNavigation<MealDetailScreenNavProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Detail Meal",
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen</Text>
      <Button
        title="GO BACK TO CATEGORIES"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="GO BACK TO MEALS"
        onPress={() =>
          navigation.replace("CategoryMealsScreen", { categoryId: "c1" })
        }
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

export default MealDetailScreen;
