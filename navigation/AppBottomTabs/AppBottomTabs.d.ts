import { Component } from "react";
import { Constructor, NativeMethodsMixin } from "react-native";

class AppBottomTabsComponent extends Component {}

const AppBottomTabsBase: Constructor<NativeMethodsMixin> &
  typeof AppBottomTabsComponent;

export default class AppBottomTabs extends AppBottomTabsBase {}
