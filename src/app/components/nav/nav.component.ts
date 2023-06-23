import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['home']) // OBRIGA A NAVEGAR NO HOME SEMPRE QUE ABRIR A NAV - ADICONA /HOME NA ROTA, E CHAMA O COMPONENTE
  }

}
