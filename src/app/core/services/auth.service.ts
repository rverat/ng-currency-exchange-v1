import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = 'http://localhost:9083/v1/api/user/';

  constructor(private http: HttpClient) { }

  login(obj: User): Observable<any> {
    return this.http.post(`${this.url}login`, obj);
  }

  setUsuario(user:any){
    localStorage.setItem('usuario', JSON.stringify(user));
  }

  estaAutentificado(){
    return this.getUsuario() != null;
  }

  getUsuario(){
    let userStr = localStorage.getItem('usuario');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      return null;
    }
  }

  setToken(token:any){
    localStorage.setItem('token',token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  removerLogin(){
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
  }
}
