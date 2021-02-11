import React, { FC } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import { HomeBottomTabParamList } from "./types";
import MealsStackNavigator from "../MealsStack/MealsStack";
import FavoritesScreen from "../../screens/FavoritesScreen";
import Colors from "../../constants/colors";

const Tab = createMaterialBottomTabNavigator<HomeBottomTabParamList>();

const HomeBottomTabs: FC = () => (
  <Tab.Navigator
    activeColor="white"
    barStyle={{ backgroundColor: Colors.Primary }}>
    <Tab.Screen
      name="Meals"
      component={MealsStackNavigator}
      options={{
        tabBarColor: Colors.Primary,
        tabBarIcon: (props) => (
          <MaterialIcons name="restaurant" size={25} color={props.color} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        tabBarColor: Colors.Accent,
        tabBarIcon: (props) => (
          <MaterialIcons name="star" size={25} color={props.color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default HomeBottomTabs;
