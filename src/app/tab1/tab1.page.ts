import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnexionPage } from '../connexion/connexion.page';
import { AngularFireDatabase } from '@angular/fire/database';
import { Tab6Page } from '../tab6/tab6.page';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
    connect = 'True';
    sportun: string;
    constructor(
        private ModalCtrl: ModalController,
        private DB: AngularFireDatabase) { }

    async showModal() {
        const modal = await this.ModalCtrl.create({
            component: ConnexionPage
        });
        await modal.present();
    }
    get() {
        this.DB.list('Sports').snapshotChanges(['child_added']).subscribe(Sports => {
            Sports.forEach(sports => {
                console.log(sports.key + sports.payload.exportVal().sport);
                this.sportun = sports.payload.exportVal().sport;
            });
        });
    }
    gets() {
        this.DB.list('Resto').snapshotChanges(['child_added']).subscribe(Resto => {
            Resto.forEach(resto => {
                console.log(resto.key + resto.payload.exportVal());
            });
        });
    }
    connexion() {
        this.connect = 'True';
        console.log(this.connect);
    }

    deconnexion() {
        this.connect = 'False';
        console.log(this.connect);
    }

    ngOnInit() {
        this.showModal();
    }
}