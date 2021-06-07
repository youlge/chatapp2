import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Servicios/auth.service';
//Esto del import es "normal" el primero marca algo de que debe de configurarse, pero ignóralo
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})

export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  verificarCorreo(){
    this.authService.login(this.email,this.password);  //Aquí enviamos los parámetros
  }

}
