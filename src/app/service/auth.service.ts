import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(

    private http: HttpClient
  ) { }

  getByIdUser(idUser: number): Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:8080/usuarios/${idUser}`)
  }


  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin)
  }

  cadastrar(user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar', user)

  }

  logado(){
    let ok: boolean = false

    if (environment.token != ''){
      ok = true
    }

    return ok
  }


}
