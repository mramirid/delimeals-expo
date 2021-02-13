import React, { FC, useLayoutEffect, useState } from "react";
import { View, StyleSheet, ToastAndroid } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import AppHeaderButton from "../components/AppHeaderButton";
import HeadingText from "../components/Text/HeadingText";
import { FiltersScreenNavProp } from "../navigation/FiltersStack/types";
import AppSwitch from "../components/AppSwitch";
import Filters from "../types/filters";
import { useAppDispatch } from "../store/types";
import { applyFilters } from "../store/reducers/meals";

const FiltersScreen: FC = () => {
  const dispatch = useAppDispatch();

  const navigation = useNavigation<FiltersScreenNavProp>();
  const [filters, setFilters] = useState<Filters>({
    isGlutenFree: false,
    isLactoseFree: false,
    isVegan: false,
    isVegetarian: false,
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Filter Meals",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
          <Item
            title="Menu"
            iconName="menu"
            onPress={navigation.toggleDrawer}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
          <Item
            title="Save"
            iconName="save"
            onPress={() => {
              dispatch(applyFilters(filters));
              ToastAndroid.show("Filters applied", ToastAndroid.SHORT);
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [dispatch, filters, navigation]);

  return (
    <View style={styles.screen}>
      <HeadingText style={styles.title}>
        Available Filters / Restrictions
      </HeadingText>
      <AppSwitch
        style={styles.filter}
        label="Gluteen-free"
        value={filters.isGlutenFree}
        onValueChange={(newVal) => {
          setFilters((filters) => ({ ...filters, isGlutenFree: newVal }));
        }}
      />
      <AppSwitch
        style={styles.filter}
        label="Lactose-free"
        value={filters.isLactoseFree}
        onValueChange={(newVal) => {
          setFilters((filters) => ({ ...filters, isLactoseFree: newVal }));
        }}
      />
      <AppSwitch
        style={styles.filter}
        label="Vegan"
        value={filters.isVegan}
        onValueChange={(newVal) => {
          setFilters((filters) => ({ ...filters, isVegan: newVal }));
        }}
      />
      <AppSwitch
        style={styles.filter}
        label="Vegetarian"
        value={filters.isVegetarian}
        onValueChange={(newVal) => {
          setFilters((filters) => ({ ...filters, isVegetarian: newVal }));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    margin: 20,
    textAlign: "center",
  },
  filter: {
    marginBottom: 15,
  },
});

export default FiltersScreen;
