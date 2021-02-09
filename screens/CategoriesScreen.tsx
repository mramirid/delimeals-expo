import React, { FC } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CategoriesScreenNavProp } from "../navigation/MealsNavigator/types";

const CategoriesScreen: FC = () => {
  const navigation = useNavigation<CategoriesScreenNavProp>();
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button
        title="GOTO MEALS"
        onPress={() => navigation.push("CategoriesScreen")}
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

export default CategoriesScreen;
