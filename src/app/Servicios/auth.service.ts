import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth, private ruta: Router) { }

  login(email: string, password: string){  //Aquí si se reciben parámetros
    return new Promise((resolve, rejected) =>
    {
      this.afauth.signInWithEmailAndPassword(email,password)
      .then(res => {
          this.ruta.navigate(['/home']);
        })
        .catch(err => alert('los datons son erroneos o no existe el usuario'));
    });
  }

  logOut()
  {
    this.afauth.signOut().then(() => {
      this.ruta.navigate(['/login']);
    })
  }


}
