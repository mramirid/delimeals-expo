import React, { FC } from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";

import { CATEGORIES } from "../data/categories";

const CategoriesScreen: FC = () => (
  <FlatList
    numColumns={2}
    data={CATEGORIES}
    renderItem={(data) => (
      <View style={styles.gridItem}>
        <Text>{data.item.title}</Text>
      </View>
    )}
  />
);

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
