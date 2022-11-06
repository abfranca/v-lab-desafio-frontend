import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logado',
  templateUrl: './logado.component.html',
  styleUrls: ['./logado.component.css']
})
export class LogadoComponent implements OnInit {

  usuarioLogado = ''

  constructor() { }

  ngOnInit(): void {

    const user = sessionStorage.getItem("user")

    if (user) {
      const userObject = JSON.parse(user)
      this.usuarioLogado = `nome: ${userObject.nome}, email: ${userObject.email}`
    } else {
      this.usuarioLogado = "nenhum usuário logado"
    }

  }

}
