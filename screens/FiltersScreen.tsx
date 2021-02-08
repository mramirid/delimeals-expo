import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

interface FiltersScreenProps {}

const FiltersScreen: FC<FiltersScreenProps> = (props) => (
  <View>
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

export default FiltersScreen;
