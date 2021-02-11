import { Component } from "react";
import { Constructor, NativeMethodsMixin } from "react-native";

class MealsFavsBottomTabsComponent extends Component {}

const MealsFavsBottomTabsBase: Constructor<NativeMethodsMixin> &
  typeof MealsFavsBottomTabsComponent;

export default class MealsFavsBottomTabs extends MealsFavsBottomTabsBase {}
