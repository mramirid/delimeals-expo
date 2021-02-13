import React, { FC, JSXElementConstructor } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  View,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
} from "react-native";

import Category from "../types/category";
import Fonts from "../constants/fonts";

interface CategoryItemProps {
  category: Category;
  onClick(): void;
}

const CategoryItem: FC<CategoryItemProps> = (props) => {
  let Touchable: JSXElementConstructor<
    TouchableOpacityProps | TouchableNativeFeedbackProps
  >;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  } else {
    Touchable = TouchableOpacity;
  }

  return (
    <View style={styles.gridItem}>
      <Touchable onPress={props.onClick}>
        <View
          style={{
            ...styles.touchable,
            backgroundColor: props.category.colorHex,
          }}>
          <Text style={styles.title} numberOfLines={2}>
            {props.category.title}
          </Text>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 5,
  },
  touchable: {
    flex: 1,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  title: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: 18,
    textAlign: "right",
  },
});

export default CategoryItem;
