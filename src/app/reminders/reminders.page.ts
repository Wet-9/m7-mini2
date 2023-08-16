import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.page.html',
  styleUrls: ['./reminders.page.scss'],
})
export class RemindersPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async showAlert(date: string, message: string) {
    const alert = await this.alertController.create({
      header: 'Reminder',
      message: `${message} on ${date}`,
      buttons: ['OK']
    });

    await alert.present();
  }
}
