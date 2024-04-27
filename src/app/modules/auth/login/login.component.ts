import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../core/models/User';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  usuario: User = new User();
  urlRedirect:string = '/currency/applylist';

  constructor(private router: Router, 
    private auth: AuthService
    ) {
  }

  ngOnInit(): void {
    this.usuario.username = '';
    this.usuario.password = '';

    if (this.auth.estaAutentificado()) {
      window.location.href = this.urlRedirect;
      return;
    }
  }

  fnLogin(){
    this.auth.login(this.usuario).subscribe({
      next: (data: any) => {
        this.auth.setUsuario(data.username);
        this.auth.setToken(data.token);

        window.location.href = this.urlRedirect;
      }, error: (e) => {
        alert('Usuario y/o contraseña incorrecto.');
        console.log(e);
      }
    })
  }
}
