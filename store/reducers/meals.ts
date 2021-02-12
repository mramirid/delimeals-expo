import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MEALS } from "../../data/meals";

import Meal from "../../types/Meal";
import { RootState } from "../types";

export interface MealsState {
  meals: Meal[];
  filteredMeals: Meal[];
  favoriteMeals: Meal[];
}

export const initialState: MealsState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

export const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<Meal>) {
      const favMealIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.payload.id,
      );
      if (favMealIndex >= 0) {
        state.favoriteMeals.splice(favMealIndex, 1);
      } else {
        state.favoriteMeals.push(action.payload!);
      }
    },
  },
});

export const selectMeals = (state: RootState) => state.meals.meals;
export const selectFilteredMeals = (state: RootState) => {
  return state.meals.filteredMeals;
};
export const selectFavoriteMeals = (state: RootState) => {
  return state.meals.favoriteMeals;
};

export const { toggleFavorite } = mealsSlice.actions;

export default mealsSlice.reducer;
