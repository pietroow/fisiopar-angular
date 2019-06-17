import { Component, OnInit } from '@angular/core';
import { Fisioterapeuta } from 'src/app/models/fisioterapeuta';
import { MatTableDataSource } from '@angular/material';
import { FisioterapeutaService } from 'src/app/shared/fisioterapeuta.service';
import { AuthService } from 'src/app/seguranca/auth.service';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-fisioterapeuta',
  templateUrl: './fisioterapeuta.component.html',
  styleUrls: ['./fisioterapeuta.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})

export class FisioterapeutaComponent implements OnInit {
    
  objeto: any = {};
  fisioterapeuta: Fisioterapeuta = new Fisioterapeuta();
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['nome', 'especialidade', 'email', 'crefito'];
  expandedElement: Fisioterapeuta | null;

  constructor(
    private fisioterapeutaService: FisioterapeutaService,
    private authService: AuthService
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
