import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { AppDrawerParamList } from "../AppDrawer/types";

export type FiltersStackParamList = {
  FiltersScreen: undefined;
};

export type FiltersScreenNavProp = CompositeNavigationProp<
  StackNavigationProp<FiltersStackParamList, "FiltersScreen">,
  DrawerNavigationProp<AppDrawerParamList>
>;
