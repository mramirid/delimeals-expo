import React, { FC, useLayoutEffect, useMemo } from "react";
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
import { Affordability, Complexity } from "../types/meal";
import { useAppDispatch, useAppSelector } from "../store/types";
import { toggleFavorite } from "../store/reducers/meals";

const MealDetailScreen: FC = () => {
  const navigation = useNavigation<MealDetailScreenNavProp>();
  const { params } = useRoute<MealDetailScreenRouteProp>();
  const dispatch = useAppDispatch();

  const isCurMealFav = useAppSelector((state) => {
    return state.meals.favoriteMeals.some((meal) => meal.id === params.meal.id);
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.meal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
          <Item
            title="Favorite"
            iconName={isCurMealFav ? "star" : "star-outline"}
            onPress={() => dispatch(toggleFavorite(params.meal))}
          />
        </HeaderButtons>
      ),
    });
  }, [dispatch, isCurMealFav, navigation, params.meal]);

  const MealDetail = useMemo(
    () => (
      <ScrollView>
        <Image style={styles.image} source={{ uri: params.meal.imageUrl }} />
        <View style={styles.approximation}>
          <BodyText>{params.meal.duration}m</BodyText>
          <BodyText>
            {Complexity[params.meal.complexity].toUpperCase()}
          </BodyText>
          <BodyText>
            {Affordability[params.meal.affordability].toUpperCase()}
          </BodyText>
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
    ),
    [params.meal],
  );

  return MealDetail;
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
