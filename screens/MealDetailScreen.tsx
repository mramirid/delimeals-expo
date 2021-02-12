import React, { FC, useLayoutEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import {
  MealDetailScreenNavProp,
  MealDetailScreenRouteProp,
} from "../navigation/MealsStack/types";
import AppHeaderButton from "../components/AppHeaderButton";
import BodyText from "../components/Text/BodyText";
import Colors from "../constants/colors";
import Fonts from "../constants/fonts";

const MealDetailScreen: FC = () => {
  const navigation = useNavigation<MealDetailScreenNavProp>();
  const { params } = useRoute<MealDetailScreenRouteProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.meal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
          <Item title="Favorite" iconName="star" onPress={() => null} />
        </HeaderButtons>
      ),
    });
  }, [navigation, params.meal.title]);

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: params.meal.imageUrl }} />
      <View style={styles.approximation}>
        <BodyText>{params.meal.duration}m</BodyText>
        <BodyText>{params.meal.upperComplexity}</BodyText>
        <BodyText>{params.meal.upperAffordability}</BodyText>
      </View>
      <View style={styles.howTosContainer}>
        <Text style={styles.howToLabel}>Ingredients</Text>
        {params.meal.ingredients.map((ingredient) => (
          <View style={styles.howToItem} key={ingredient}>
            <BodyText>{ingredient}</BodyText>
          </View>
        ))}
        <Text style={styles.howToLabel}>Steps</Text>
        {params.meal.steps.map((step) => (
          <View style={styles.howToItem} key={step}>
            <BodyText>{step}</BodyText>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  approximation: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
    backgroundColor: Colors.PrimaryLight,
  },
  howTosContainer: {
    marginTop: 10,
  },
  howToLabel: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: 22,
    textAlign: "center",
  },
  howToItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
