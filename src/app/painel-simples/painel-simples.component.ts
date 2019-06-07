import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormGroup } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';
import { FisioterapeutaServiceService } from '../shared/fisioterapeuta-service.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Fisioterapeuta } from '../models/fisioterapeuta';

@Component({
  selector: 'app-painel-simples',
  templateUrl: './painel-simples.component.html',
  styleUrls: ['./painel-simples.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
    ],
})

export class PainelSimplesComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private fisioterapeutaService: FisioterapeutaServiceService
    ) { }

  fisioterapeuta: Fisioterapeuta;
  investimentoPoupanciaId = 2;
  error: any;

  findAll() {
    this.fisioterapeutaService.findAll().subscribe(res => {
      this.fisioterapeuta = res;
    });
  }





  ngOnInit() {
  }

}
