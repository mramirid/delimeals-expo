import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

import { AppDrawerParamList } from "./types";
import MealsFavsBottomTabs from "../MealsFavsBottomTabs/MealsFavsBottomTabs";
import FiltersStack from "../FiltersStack/FiltersStack";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

const DrawerContent: FC<DrawerContentComponentProps<DrawerContentOptions>> = (
  props,
) => (
  <>
    <View style={drawerContentStyles.header}>
      <Text style={drawerContentStyles.title}>Delimeals</Text>
    </View>
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  </>
);

const drawerContentStyles = StyleSheet.create({
  header: {
    backgroundColor: Colors.Primary,
    height: 140,
    padding: 25,
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: 24,
    color: "white",
  },
});

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
