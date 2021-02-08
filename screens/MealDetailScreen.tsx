import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

interface MealDetailScreenProps {}

const MealDetailScreen: FC<MealDetailScreenProps> = (props) => (
  <View>
    <Text>The Meal Detail Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
