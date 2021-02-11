import React, { FC } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import Meal from "../../models/Meal";
import MealItem from "./MealItem";

interface MealListProps {
  meals: Meal[];
  onMealClicked(meal: Meal): void;
}

const MealList: FC<MealListProps> = (props) => (
  <View style={styles.mealList}>
    <FlatList
      style={{ width: "100%" }}
      data={props.meals}
      renderItem={(data) => (
        <MealItem
          meal={data.item}
          onClick={() => props.onMealClicked(data.item)}
        />
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  mealList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 15,
  },
});

export default MealList;
