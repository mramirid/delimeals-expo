import { createSlice } from "@reduxjs/toolkit";
import { MEALS } from "../../data/meals";

import Meal from "../../models/Meal";
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
  reducers: {},
});

export const selectMeals = (state: RootState) => state.meals.meals;
export const selectFilteredMeals = (state: RootState) => {
  return state.meals.filteredMeals;
};
export const selectFavoriteMeals = (state: RootState) => {
  return state.meals.favoriteMeals;
};

export default mealsSlice.reducer;
