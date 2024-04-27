export class CurrencyExchange{
    operationId?: number;
    userId?: number;
    amount?: number;
    convertedAmount?: number;
    currencyFrom?: string;
    currencyTo?: string;
    exchangeRate?: number;
    dateTime?: Date;

  constructor(){
    this.operationId = 0;
    this.userId = 0;
    this.amount = 0;
    this.convertedAmount = 0;
    this.currencyFrom ='';
    this.currencyTo ='';
    this.exchangeRate = 0;
    this.dateTime = new Date();
  }
}