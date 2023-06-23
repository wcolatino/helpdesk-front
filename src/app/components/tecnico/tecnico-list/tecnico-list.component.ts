import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {

  ELEMENT_DATA: Tecnico [] = [
    {id: 1, nome: 'Willie Colatino', cpf: '123.456.789-10', email: 'wcolatino@gmail.com', senha: '', perfis: ['0'], dataCriacao: '15/08/2022'},
    {id: 2, nome: 'Willie Colatino', cpf: '123.456.789-10', email: '', senha: 'wcolatino@gmail.com', perfis: ['0'], dataCriacao: '15/08/2022'}
  ]

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

