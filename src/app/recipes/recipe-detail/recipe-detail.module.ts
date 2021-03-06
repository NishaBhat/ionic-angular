import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { RecipeDetailPage } from "./recipe-detail.page";
import { RecipeDetailPageRoutingModule } from "./recipe-detail-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeDetailPageRoutingModule,
  ],
  declarations: [RecipeDetailPage],
})
export class RecipeDetailPageModule {}
