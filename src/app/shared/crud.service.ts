import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fire: AngularFirestore) { }

record: any;
createNewRecord(record: any) {

return this.fire.collection('users').add(record);

}



}
