import { useNavigation } from "@react-navigation/native";
import React, { FC, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import AppHeaderButton from "../components/AppHeaderButton";
import { FiltersScreenNavProp } from "../navigation/FiltersStack/types";

const FiltersScreen: FC = () => {
  const navigation = useNavigation<FiltersScreenNavProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Filter Meals",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
          <Item
            title="Menu"
            iconName="menu"
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Text>The Filters Screen</Text>
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

export default FiltersScreen;
