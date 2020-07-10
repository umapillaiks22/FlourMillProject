import { Component, OnInit } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

import { PopoverController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { PopoverPage } from '../about-popover/about-popover';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage {
  location = 'madison';
  conferenceDate = '2047-05-17';

  selectOptions = {
    header: 'Select a Location'
  };

  constructor(public popoverCtrl: PopoverController,private alertCtrl: AlertController) { }


  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }
}
