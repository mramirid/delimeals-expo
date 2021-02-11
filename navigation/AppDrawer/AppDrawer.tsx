import React, { FC } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

import { AppDrawerParamList } from "./types";
import MealsFavsBottomTabs from "../MealsFavsBottomTabs/MealsFavsBottomTabs";
import FiltersStack from "../FiltersStack/FiltersStack";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";
import DrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator<AppDrawerParamList>();

const AppDrawer: FC = () => (
  <Drawer.Navigator
    drawerContent={DrawerContent}
    drawerContentOptions={{
      activeTintColor: Colors.Accent,
      labelStyle: { fontFamily: Fonts.OpenSansBold },
    }}>
    <Drawer.Screen
      name="MealsFavsBottomTabs"
      component={MealsFavsBottomTabs}
      options={{
        drawerLabel: "Meals",
        drawerIcon: (props) => (
          <MaterialIcons name="restaurant" size={22} color={props.color} />
        ),
      }}
    />
    <Drawer.Screen
      name="FiltersStack"
      component={FiltersStack}
      options={{
        drawerLabel: "Filters",
        drawerIcon: (props) => (
          <MaterialIcons name="filter-list-alt" size={22} color={props.color} />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default AppDrawer;
