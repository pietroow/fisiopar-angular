import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { FisioterapeutaService } from '../shared/fisioterapeuta.service';
import { Fisioterapeuta } from '../models/fisioterapeuta';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-painel-simples',
  templateUrl: './painel-simples.component.html',
  styleUrls: ['./painel-simples.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ],
})

export class PainelSimplesComponent implements OnInit {

  objeto: any = {};
  fisioterapeuta: Fisioterapeuta = new Fisioterapeuta();
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['nome', 'especialidade', 'email', 'crefito'];
  expandedElement: Fisioterapeuta | null;

  constructor(
    private fisioterapeutaService: FisioterapeutaService
  ) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.fisioterapeutaService.findAll().subscribe(res => {
      this.dataSource.data = res;
    });
  }

  create() {
    this.fisioterapeutaService.create(this.fisioterapeuta).subscribe();
  }

}
