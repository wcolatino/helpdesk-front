import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  creds: Credenciais = { //Coloca o login e senha dentro de credenciais
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email); //Valida se o email está no formato de e-mail;
  senha = new FormControl(null, Validators.minLength(3)); //Valida se a senha é de no mínimo 3 caracteres;

  constructor(
    private toast: ToastrService,
    private service: AuthService
    ) { }

  ngOnInit(): void {
  }

  //MÉTODO PARA VALIDAR BOTÃO;
  validaCampos(): boolean{
    return this.email.valid && this.senha.valid
  }

  logar(){
      this.service.authenticate(this.creds).subscribe(resposta => { //Subscribe - espera uma resposta
          this.toast.info(resposta.headers.get('Authorizarion'))
      }, () => {
          this.toast.error('Usuário e/ou senha inválidos')
      })
  }

}
