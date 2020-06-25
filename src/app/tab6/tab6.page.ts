import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular' ;
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {
  sportun: string ;
  sportdeux: string ;
  sporttrois: string ;
  snapshot: string ;
  postal: string ;
  book: string ;
  muse: string ;
  resto: string ;
  musique: string ;
  missing: boolean ;
  constructor(
    private modalCtrl: ModalController,
    public afDB: AngularFireDatabase
    ) { }

  ngOnInit() {
    this.missing = true ;
  }
  async closer(){
    await this.modalCtrl.dismiss();
  }
  submiter(){
    firebase.database().ref('Sports/SportA:').set({
      sport: this.sportun
    });
    firebase.database().ref('Sports/SportB:').set({
      sport: this.sportdeux
    });

    firebase.database().ref('Sports/SportC:').set({
      sport: this.sporttrois
    });
    this.afDB.list('Sports').snapshotChanges(['child_added']).subscribe(Sports => {
      Sports.forEach(sports => {
        console.log( sports.key + sports.payload.exportVal().sport);
      });
    });
    console.log(this.postal);
    console.log(this.book);
    console.log(this.muse);
    console.log(this.resto);
    console.log(this.musique);
    }
    actu(){
    console.log(this.sportun);
    if ((this.sportun === undefined) || (this.sportdeux === undefined) || (this.sporttrois === undefined)
     || (this.postal === undefined) || (this.book === undefined)
     || (this.resto === undefined) || (this.muse === undefined) && (this.musique === undefined)){
    this.missing = true ;
    }else {
      this.missing = false ;
    }
  }
  }
