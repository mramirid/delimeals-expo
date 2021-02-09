import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

const MealDetailScreen: FC = () => (
  <View style={styles.screen}>
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
