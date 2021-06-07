import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { ChatComponent } from '../componentes/chat/chat.component';
import { AuthService } from '../Servicios/auth.service';
import { ChatService } from '../Servicios/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public chats: any=[];


  constructor(private outService: AuthService,
    private modal: ModalController,
    private chatService: ChatService,  public actionSheetController: ActionSheetController) {}


  openChat(chat: any)
  {
    this.modal.create({
      component: ChatComponent,
      componentProps: {
        chat : chat
      }
    }).then((modal) => modal.present());
  }

  logOut()
  {
    this.outService.logOut();
  }

  ngOnInit() : void
  {
     this.chatService.getChatRooms().subscribe(chats => {
       this.chats=chats;
     })
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Cerrar Sesión',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          this.logOut();
        }
      }
      ]
    });
    await actionSheet.present();
  }

}
