import { Component } from "react";
import { Constructor, NativeMethodsMixin } from "react-native";

class HomeButtonTabsComponent extends Component {}

const HomeButtonTabsBase: Constructor<NativeMethodsMixin> &
  typeof HomeButtonTabsComponent;

export default class HomeButtonTabs extends HomeButtonTabsBase {}
