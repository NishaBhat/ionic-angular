import { Component, OnDestroy, OnInit } from "@angular/core";

import { Recipe } from "./recipe.model";
import { RecipesService } from "./recipes.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.page.html",
  styleUrls: ["./recipes.page.scss"],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipiesSub: Subscription;
  constructor(private router: Router, private recipeSevice: RecipesService) {}
  ngOnDestroy(): void {
    this.recipiesSub.unsubscribe();
  }
  recipes: Recipe[];
  ngOnInit() {
    this.recipiesSub = this.recipeSevice.recipiesObj.subscribe((data: any) => {
      this.recipes = data;
    });
    this.recipeSevice.publishRecipes();
  }
  budgetPlanner() {
    this.router.navigate(["/home"]);
  }
}
