import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';

//componentes
import { ChatComponent } from './componentes/chat/chat.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
//servicios
import { ChatService } from './Servicios/chat.service';
import { AuthService } from './Servicios/auth.service';

//firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { firebase } from 'src/environments/environment';


@NgModule({
  declarations: [AppComponent,ChatComponent],
  entryComponents: [ChatComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebase),AngularFirestoreModule,
    AngularFireAuthModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy,},
                ChatService,AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
//
