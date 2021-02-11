import React, { FC } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import { AppBottomTabParamList } from "./types";
import Colors from "../../constants/colors";
import MealsStack from "../MealsStack/MealsStack";
import FavoritesStack from "../FavoritesStack/FavoritesStack";

const Tab = createMaterialBottomTabNavigator<AppBottomTabParamList>();

const AppBottomTabs: FC = () => (
  <Tab.Navigator sceneAnimationEnabled activeColor="white" shifting>
    <Tab.Screen
      name="MealsStack"
      component={MealsStack}
      options={{
        tabBarLabel: "Meals",
        tabBarColor: Colors.Primary,
        tabBarIcon: (props) => (
          <MaterialIcons name="restaurant" size={25} color={props.color} />
        ),
      }}
    />
    <Tab.Screen
      name="FavoritesStack"
      component={FavoritesStack}
      options={{
        tabBarLabel: "Favorites",
        tabBarColor: Colors.Accent,
        tabBarIcon: (props) => (
          <MaterialIcons name="star" size={25} color={props.color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppBottomTabs;
