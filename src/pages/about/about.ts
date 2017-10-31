import { FirebaseDataStorageService } from './../../providers/firebase.data.storage.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  private temasList;

  constructor(public navCtrl: NavController,
              private firebaseDataStorage: FirebaseDataStorageService) {

  }

  ngOnInit(){
    this.firebaseDataStorage.listTemas$.subscribe((temas)=>{
      this.temasList = temas;
      console.log(this.temasList);
    });
  }

}
