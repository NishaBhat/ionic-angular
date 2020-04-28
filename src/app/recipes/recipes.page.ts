import { Component, OnInit } from "@angular/core";

import { Recipe } from "./recipe.model";
import { RecipesService } from "./recipes.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.page.html",
  styleUrls: ["./recipes.page.scss"],
})
export class RecipesPage implements OnInit {
  constructor(private router: Router, private recipeSevice: RecipesService) {}
  recipes: Recipe[];
  ngOnInit() {
    this.recipes = this.recipeSevice.getAllRecipes();
  }
  budgetPlanner() {
    this.router.navigate(["/home"]);
  }
}
