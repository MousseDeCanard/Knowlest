import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular' ;
import { Tab6Page } from '../tab6/tab6.page' ;

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  mail: string ;
  pass: string ;
  constructor(private modalCtrl: ModalController) {
  }
  async close(){
    await this.modalCtrl.dismiss();
    const modal = await this.modalCtrl.create ({
      component: Tab6Page
    });
    await modal.present();
  }
  ngOnInit() {
  }
  submit(){
    console.log(this.mail);
    console.log(this.pass);
  }

}
