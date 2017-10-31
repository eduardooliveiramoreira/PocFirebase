import { FirebaseDataStorageService } from './../../providers/firebase.data.storage.service';
import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html',
})
export class ActivitiesPage {

  private listActiviesDaySelected;
  private quartaList;
  private quintaList;
  private sextaList;
  private day;

  constructor(public navCtrl: NavController, 
    private navParams : NavParams,
    private firebaseDataStorage: FirebaseDataStorageService) {
      this.day = navParams.get("day");
  }

  ngOnInit(){
    this.firebaseDataStorage.listQuarta$.subscribe((quarta)=>{
      this.quartaList = quarta;
    });
    this.firebaseDataStorage.listQuinta$.subscribe((quinta)=>{
      this.quintaList = quinta;
    });
    this.firebaseDataStorage.listSexta$.subscribe((sexta)=>{
      this.sextaList = sexta;
    });

    if(this.day ==  "Quarta-Feira - 25/10/2017"){
      this.listActiviesDaySelected = this.quartaList;
    }
    if(this.day ==  "Quinta-Feira - 26/10/2017"){
      this.listActiviesDaySelected = this.quintaList;
    }
    if(this.day ==  "Sexta-Feira - 27/10/2017"){
      this.listActiviesDaySelected = this.sextaList;
    }
    
  }
  
}
