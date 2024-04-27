import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor( private auth: AuthService
    ) {
  }

  ngOnInit(): void {
   
  }

  fnGuardar(){
    
  }

  fnLogout(){
    this.auth.removerLogin();
    window.location.href = '/login';
  }
}
