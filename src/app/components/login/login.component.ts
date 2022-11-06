import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Login do Usuário'
  nome = ''
  senha = ''
  email = ''
  isPhonePortrait = false;

  constructor(private responsive: BreakpointObserver) { }

  logar(): void {
    const userLocal = localStorage.getItem(this.nome)
    if (userLocal && JSON.parse(userLocal).senha == this.senha) {
      sessionStorage.setItem("user", userLocal)
    } else {
      sessionStorage.clear()
    }
  }

  ngOnInit(): void {

    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {

        this.isPhonePortrait = false;

        if (result.matches) {
          this.isPhonePortrait = true;
        }

      });

  }

}
