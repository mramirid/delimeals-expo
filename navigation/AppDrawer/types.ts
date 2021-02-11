import { DrawerNavigationProp } from "@react-navigation/drawer";

export type AppDrawerParamList = {
  MealsFavsBottomTabs: undefined;
  FiltersStack: undefined;
};

export type MealsFavsBottomTabsNavProp = DrawerNavigationProp<
  AppDrawerParamList,
  "MealsFavsBottomTabs"
>;

export type FiltersStackNavProp = DrawerNavigationProp<
  AppDrawerParamList,
  "FiltersStack"
>;
