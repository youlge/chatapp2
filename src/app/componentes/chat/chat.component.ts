
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Message } from 'src/app/Modelo/mensajes';
import { ChatService } from 'src/app/Servicios/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  @ViewChild('area') foco : any;
  public chat: any;
  public msg: string; //para los mensajes
  public room: any;


  constructor(private navParams: NavParams, private modal: ModalController,
    private chatService: ChatService) { }

  ngOnInit() {
    this.chat= this.navParams.get('chat'); //rescatar mensajes en el objeto room 
    this.chatService.getChat(this.chat.id).subscribe(r =>{
      this.room = r;
    })
  }

  ngAfterViewChecked()
  {
    this.foco.setFocus();
  }

  closeChat()
  {
    this.modal.dismiss();
  }

  sendMessage()
  {
    if(this.msg!="")
    {
        const m : Message = {
          content: this.msg,
          type: "text",
          date: new Date()
        }
        this.chatService.sendMsgToFireBase(m, this.chat.id);
        this.msg="";
        this.foco.setFocus();
    }

  }
}
