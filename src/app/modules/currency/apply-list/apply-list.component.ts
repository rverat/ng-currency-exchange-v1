import { CurrencyExchange } from '../../../core/models/CurrencyExchange';
import { CurrencyExChangeService } from './../../../core/services/currency.exchange.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-list',
  templateUrl: './apply-list.component.html',
  styleUrl: './apply-list.component.css'
})
export class ApplyListComponent implements OnInit {
  currencyList: CurrencyExchange[] = [];
  constructor( 
    private service: CurrencyExChangeService
    ) {
  }

  ngOnInit(): void {
    this.fnList();
  }

  fnList(){
    this.service.list().subscribe({
      next: (data) =>{
        this.currencyList = data;
      },error: (e) =>{
       alert('No se pudieron cargar listado.');
        console.log(e);
      }
    })
  }
}
