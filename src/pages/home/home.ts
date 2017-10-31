import { FirebaseDataStorageService } from './../../providers/firebase.data.storage.service';
import { ActivitiesPage } from './../activities/activities';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private listDays = [
    "Quarta-Feira - 25/10/2017",
    "Quinta-Feira - 26/10/2017",
    "Sexta-Feira - 27/10/2017"
  ];

  public temas;
  constructor(public navCtrl: NavController, 
              private firebaseDataStorage: FirebaseDataStorageService) {
  }

  ngOnInit(){
    this.firebaseDataStorage.listTemas$.subscribe((item)=>{
      this.temas = item;
    })
  }

  goToActivities(day){
    this.navCtrl.push(ActivitiesPage, {'day': day});
  }

}
