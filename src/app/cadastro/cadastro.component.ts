import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  user: Usuario =  new Usuario
  confiSenha: string
  tipUser: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.confiSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipUser = event.target.value
  }

  cadastrar(){
    this.user.tipo = this.tipUser

    if (this.user.senha != this.confiSenha) {
      alert('As senhas estão incorretas')
    } else {
      this.authService.cadastrar(this.user).subscribe((resp: Usuario)=> {
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso!')
      })
    }

  }
}
