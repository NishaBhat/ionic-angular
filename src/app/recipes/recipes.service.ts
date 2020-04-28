import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: "root",
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: "r1",
      title: "Upma",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/Upma%28Uppit%29.JPG",
      ingredients: ["Semolina", "Tomatoes", "Onions", "Curry Leaves", "peas"],
    },
    {
      id: "r2",
      title: "Kung Pao Chicken",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/Kung_Pao_chicken_%28western_version%29_-1.jpg",
      ingredients: ["Onions", "Chicken", "Celery", "Groundnuts", "Soy Sauce"],
    },
    {
      id: "r2",
      title: "Bok Choy",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/58/Bok_Choy.JPG",
      ingredients: ["Ginger", "Garlic", "Bok Choy"],
    },
  ];
  constructor() {}
  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId) {
    return { ...this.recipes.find((e) => e.id === recipeId) };
  }
}
