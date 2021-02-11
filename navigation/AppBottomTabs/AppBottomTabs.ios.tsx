import React, { FC } from "react";
import {
  BottomTabBarOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { AppBottomTabParamList } from "./types";
import MealsStackNavigator from "../MealsStack/MealsStack";
import FavoritesScreen from "../../screens/FavoritesScreen";
import Colors from "../../constants/colors";

const Tab = createBottomTabNavigator<AppBottomTabParamList>();

const tabBarOptions: BottomTabBarOptions = {
  activeTintColor: Colors.Accent,
};

const AppBottomTabs: FC = () => (
  <Tab.Navigator tabBarOptions={tabBarOptions}>
    <Tab.Screen
      name="MealsStack"
      component={MealsStackNavigator}
      options={{
        tabBarLabel: "Meals",
        tabBarIcon: (props) => (
          <Ionicons name="ios-restaurant" size={25} color={props.color} />
        ),
      }}
    />
    <Tab.Screen
      name="FavoritesStack"
      component={FavoritesScreen}
      options={{
        tabBarLabel: "Favorites",
        tabBarIcon: (props) => (
          <Ionicons name="star" size={25} color={props.color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppBottomTabs;
