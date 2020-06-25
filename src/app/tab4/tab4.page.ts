import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular' ;
import { Tab6Page } from '../tab6/tab6.page';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(
    private ModalCtrl: ModalController
    ) { }
  async showModale(){
    const modal = await this.ModalCtrl.create ({
      component: Tab6Page
    });
    await modal.present();
  }

  ngOnInit(){}
  }

