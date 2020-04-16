import { AlertController } from "@ionic/angular";
import { Component } from "@angular/core";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  input_reason: string;
  input_amount: number;
  totalExpenses = 0;
  dataList = [];
  constructor(private alertCtrl: AlertController) {}
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: "Error",
      subHeader: "",
      message: "Please enter a reason and amount",
      buttons: ["OK"],
    });

    await alert.present();
  }
  addExpense() {
    if (
      !this.input_reason ||
      this.input_reason.trim().length <= 0 ||
      this.input_amount <= 0
    ) {
      this.presentAlert();
      return;
    }
    this.dataList.push(`${this.input_reason}:$${this.input_amount}`);
    this.totalExpenses += this.input_amount;
    this.clear();
  }
  clear() {
    this.input_amount = 0;
    this.input_reason = "";
  }
}
