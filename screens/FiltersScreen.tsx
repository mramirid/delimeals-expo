import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackNavigationOptions } from "@react-navigation/stack";

const FiltersScreen: FC = () => (
  <View style={styles.screen}>
    <Text>The Filters Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const screenOptions: StackNavigationOptions = {
  headerTitle: "Filters",
};

export default FiltersScreen;
