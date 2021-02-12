import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { MealsFavsBottomTabsParamList } from "./types";
import MealsStackNavigator from "../MealsStack/MealsStack";
import FavoritesScreen from "../../screens/FavoritesScreen";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

const Tab = createBottomTabNavigator<MealsFavsBottomTabsParamList>();

const AppBottomTabs: FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: Colors.Accent,
      labelStyle: {
        fontFamily: Fonts.OpenSansBold,
      },
    }}>
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
