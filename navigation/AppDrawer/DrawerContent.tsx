import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import Fonts from "../../constants/fonts";
import Colors from "../../constants/colors";

const DrawerContent: FC<DrawerContentComponentProps<DrawerContentOptions>> = (
  props,
) => (
  <>
    <View style={styles.header}>
      <Text style={styles.title}>Delimeals</Text>
    </View>
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  </>
);

const styles = StyleSheet.create({
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

export default DrawerContent;
