import React, { FC, JSXElementConstructor } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import Fonts from "../constants/fonts";
import Colors from "../constants/colors";
import Meal from "../models/Meal";

interface MealItemProps {
  meal: Meal;
  onClick(): void;
}

const MealItem: FC<MealItemProps> = ({ meal, onClick }) => {
  let Touchable: JSXElementConstructor<
    TouchableOpacityProps | TouchableNativeFeedbackProps
  >;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  } else {
    Touchable = TouchableOpacity;
  }

  return (
    <View style={styles.mealItem}>
      <Touchable onPress={onClick}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: meal.imageUrl }}
              style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {meal.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{meal.duration}m</Text>
            <Text>{meal.upperComplexity}</Text>
            <Text>{meal.upperAffordability}</Text>
          </View>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: Colors.PrimaryLight,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 16,
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  bgImage: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
});

export default MealItem;
