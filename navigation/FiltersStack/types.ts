import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { FiltersStackNavProp } from "../AppDrawer/types";

export type FiltersStackParamList = {
  FiltersScreen: undefined;
};

export type FiltersScreenNavProp = CompositeNavigationProp<
  StackNavigationProp<FiltersStackParamList, "FiltersScreen">,
  FiltersStackNavProp
>;
