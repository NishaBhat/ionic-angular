import { Component, OnInit } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.page.html",
  styleUrls: ["./recipes.page.scss"],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
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
  constructor(private router: Router) {}

  ngOnInit() {}
  budgetPlanner() {
    this.router.navigate(["/home"]);
  }
}
