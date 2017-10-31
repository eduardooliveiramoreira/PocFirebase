import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from "rxjs";
import { Storage } from '@ionic/storage';

@Injectable()
export class FirebaseDataStorageService {     

    private listQuartaSource = new BehaviorSubject<Object>([]);
    listQuarta$ = this.listQuartaSource.asObservable();

    private listQuintaSource = new BehaviorSubject<Object>([]);
    listQuinta$ = this.listQuintaSource.asObservable();

    private listSextaSource = new BehaviorSubject<Object>([]);
    listSexta$ = this.listSextaSource.asObservable();

    private listTemasSource = new BehaviorSubject<Object>([]);
    listTemas$ = this.listTemasSource.asObservable();
    
    constructor(public storage: Storage, 
        public afDB: AngularFireDatabase) { 

            let tabs = ['QUARTA','QUINTA','SEXTA','TEMAS'];

            this.getDataStorageFromKeys(tabs);
        
        }

    public initListener(){
        this.afDB.list('QUARTA').valueChanges().subscribe((data)=>{
            this.setDataStorage("QUARTA",data);
          });
    
          this.afDB.list('QUINTA').valueChanges().subscribe((data)=>{
            this.setDataStorage("QUINTA",data);
          });
    
          this.afDB.list('SEXTA').valueChanges().subscribe((data)=>{
            this.setDataStorage("SEXTA",data);
          });
    
          this.afDB.list('TEMAS').valueChanges().subscribe((data)=>{
            this.setDataStorage("TEMAS",data);
          });
    }

    private setDataStorage(key, data){      
        this.storage.ready().then(() => {
            this.storage.set(key, data);
            this.getDataStorageFromKeys([key]);
        });     
      }

      getDataStorageFromKeys(tabs){
        this.storage.ready().then(() => {
            
                            for(let i = 0; i <= tabs.length; i++){
            
                                let key = tabs[i];
            
                                switch(key){
                                    case 'QUARTA':
                                    this.storage.get(key).then((quarta)=>{
                                        this.listQuartaSource.next(quarta);
                                    });                                    
                                    break;
            
                                    case 'QUINTA':
                                    this.storage.get(key).then((quinta)=>{
                                        this.listQuintaSource.next(quinta);
                                    });                                    
                                    break;
            
                                    case 'SEXTA':
                                    this.storage.get(key).then((sexta)=>{
                                        this.listSextaSource.next(sexta);
                                    });                                    
                                    break;
            
                                    case 'TEMAS':
                                    this.storage.get(key).then((temas)=>{
                                        this.listTemasSource.next(temas);
                                    });                                    
                                    break;    
                                    default:
                                    break;
                                }
                    
                            }
            
                        });   
    }

}