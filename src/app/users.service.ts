import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getUsers(): any[] {
    return [
      { ID: 'usuario1@gmail.com', password: "123456", Username: "Pablete", profilePhoto: "https://www.selwo.es/content/dam/swa/images/descubre-el-zoo/especies-y-territorios/animales/gibon-de-manos-blancas/Gibon-manos-blancas-Selwo-Aventura-5.jpg"},
      { ID: 'usuario2@gmail.com', password: "654321", Username: "Juanete"},
      { ID: 'a', password: "a", Username: "Admin"}
    ];
  }
  constructor() { }
}
