export enum Affordability {
  Affordable = "Affordable",
  Pricey = "Pricey",
  Luxurious = "Luxurious",
}

export enum Complexity {
  Simple = "Simple",
  Challenging = "Challenging",
  Hard = "Hard",
}

export default interface Meal {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: Affordability;
  complexity: Complexity;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isLactoseFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
}
