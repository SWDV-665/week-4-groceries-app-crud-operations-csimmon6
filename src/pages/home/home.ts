import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { addSyntheticTrailingComment } from 'typescript';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery List";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesServiceProvider, public inputDialogService: InputDialogServiceProvider) {

  }

  loadItems() {
    return this.dataService.getItems();
  }

  addItem() {
    console.log("Adding item");
    this.inputDialogService.showPrompt();
  }

  removeItem(item, index) {
    console.log("Removing item: ", item, index)
    const toast = this.toastCtrl.create({
      message: 'Removing item: ' + (index + 1),
      duration: 3000
    });
    toast.present();

    this.dataService.removeItem(index);
  }

  editItem(item, index) {
    console.log("Edit item: ", item, index)
    const toast = this.toastCtrl.create({
      message: 'Editing item - ' + (index + 1),
      duration: 3000
    });
    toast.present();
    this.inputDialogService.showPrompt(item,index);
  }
}
