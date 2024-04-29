import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrencyExchange } from '../models/CurrencyExchange';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExChangeService {
  url: string = 'http://localhost:9006/api/v1/currency-exchange/';

  constructor(private http: HttpClient) { }

 
  list() {
    return this.http.get<CurrencyExchange[]>(this.url + 'getAll');
  }

  save(data: CurrencyExchange){
    return this.http.post( `${this.url}apply`, data);
  }
}
