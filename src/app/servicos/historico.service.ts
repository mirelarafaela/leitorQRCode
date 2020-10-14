import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Historico } from '../models/Historico';


import localePtBr from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  constructor(private afs: AngularFirestore) {
    registerLocaleData(localePtBr);
   }

  //create: inserir dados
  public create(historico: Historico){
    return this.afs.collection('historicos').add({...historico});
  }

  public getAll(){
    return this.afs.collection('historicos').snapshotChanges();
  }

  public update(key:string, historico: Historico){
    return this.afs.doc(`historicos/${key}`).update(historico);

  }

  public delete(key: string){
    return this.afs.doc(`historicos/${key}`).delete();
  }
}
