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

export const selectMealsState = (state: RootState) => state.meals;

export default mealsSlice.reducer;
