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

export default class Meal {
  constructor(
    public id: string,
    public categoryIds: string[],
    public title: string,
    public affordability: Affordability,
    public complexity: Complexity,
    public imageUrl: string,
    public duration: number,
    public ingredients: string[],
    public steps: string[],
    public isGlutenFree: boolean,
    public isLactoseFree: boolean,
    public isVegan: boolean,
    public isVegetarian: boolean,
  ) {}

  get upperComplexity(): string {
    return Complexity[this.complexity].toUpperCase();
  }

  get upperAffordability(): string {
    return Affordability[this.affordability].toUpperCase();
  }
}
