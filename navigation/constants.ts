import { Platform } from "react-native";
import { StackNavigationOptions } from "@react-navigation/stack";

import Colors from "../constants/colors";

export const defaultStackScreenOptions: StackNavigationOptions = {
  headerTintColor: Platform.OS === "android" ? "white" : undefined,
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.Primary : undefined,
  },
};
