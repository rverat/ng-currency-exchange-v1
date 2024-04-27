import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrencyExchange } from '../models/CurrencyExchange';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExChangeService {
  url: string = 'http://localhost:9006/currency-conversion/';

  constructor(private http: HttpClient) { }

 
  list() {
    return this.http.get<CurrencyExchange[]>(this.url + 'convertions');
  }

  save(data: CurrencyExchange){
    return this.http.post( `${this.url}applyConvertion`, data);
  }
}
