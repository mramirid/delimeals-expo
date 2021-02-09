import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackNavigationOptions } from "@react-navigation/stack";

const FavoritesScreen: FC = () => (
  <View style={styles.screen}>
    <Text>The Favorites Screen</Text>
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
  headerTitle: "Favorites",
};

export default FavoritesScreen;
