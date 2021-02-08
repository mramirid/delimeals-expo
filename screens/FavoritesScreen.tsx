import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

interface FavoritesScreenProps {}

const FavoritesScreen: FC<FavoritesScreenProps> = (props) => (
  <View>
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

export default FavoritesScreen;
