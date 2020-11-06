import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private actionSheet: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheet.create({
      header: 'Test Action Sheet',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'trash',
          handler: () => {
            console.log('You clicked me');
          },
        },
        {
          text: 'Hello',
          role: 'destructive',
          icon: 'add',
          handler: () => {
            console.log('You added me');
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
