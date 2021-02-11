import React, { FC } from "react";
import {
  BottomTabBarOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { HomeBottomTabParamList } from "./types";
import MealsStackNavigator from "../MealsStack/MealsStack";
import FavoritesScreen from "../../screens/FavoritesScreen";
import Colors from "../../constants/colors";

const Tab = createBottomTabNavigator<HomeBottomTabParamList>();

const tabBarOptions: BottomTabBarOptions = {
  activeTintColor: Colors.Accent,
};

const HomeBottomTabs: FC = () => (
  <Tab.Navigator tabBarOptions={tabBarOptions}>
    <Tab.Screen
      name="Meals"
      component={MealsStackNavigator}
      options={{
        tabBarIcon: (props) => (
          <Ionicons name="ios-restaurant" size={25} color={props.color} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        tabBarLabel: "Favorites!",
        tabBarIcon: (props) => (
          <Ionicons name="star" size={25} color={props.color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default HomeBottomTabs;
