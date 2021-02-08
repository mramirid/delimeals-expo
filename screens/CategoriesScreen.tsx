import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

interface CategoriesScreenProps {}

const CategoriesScreen: FC<CategoriesScreenProps> = (props) => (
  <View>
    <Text>The Categories Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
