import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome = '';
  email = '';
  senha = '';

  cadastrar(): void {
    const user = { nome: this.nome, email: this.email, senha: this.senha }
    localStorage.setItem(this.nome, JSON.stringify(user))
    console.log(user)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
