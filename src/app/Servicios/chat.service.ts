import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Message } from '../Modelo/mensajes';
import  firebase  from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private db: AngularFirestore) { }

  getChatRooms()
  {
    return this.db.collection('chatRooms').valueChanges({idField: 'id'})
  }

  sendMsgToFireBase(message: Message, id: string)
  {
    this.db.collection('chatRooms').doc(id).update({
      Messages: firebase.firestore.FieldValue.arrayUnion(message),
    });
  }

  getChat(id: string)
  {
     return this.db.collection('chatRooms').doc(id).valueChanges()
  }
}
