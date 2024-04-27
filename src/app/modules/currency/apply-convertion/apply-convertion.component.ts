import { Router } from '@angular/router';
import { CurrencyExchange } from '../../../core/models/CurrencyExchange';
import { CurrencyExChangeService } from './../../../core/services/currency.exchange.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-convertion',
  templateUrl: './apply-convertion.component.html',
  styleUrl: './apply-convertion.component.css'
})
export class ApplyConvertionComponent implements OnInit {
  currency: CurrencyExchange = new CurrencyExchange();
  urlBack: string = '/currency/applylist';
  constructor( private service: CurrencyExChangeService,
    private router: Router
    ) {
  }

  ngOnInit(): void {
   
  }

  fnGuardar(){
    this.service.save(this.currency).subscribe({
      next: (data: any) => {
        this.router.navigate([this.urlBack]);
      }, error: (e) => {
        alert('Error al momento de guardar datos.');
        console.log(e);
      }
    })
  }
}
