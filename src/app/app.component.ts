import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'pipe';
  amount = 2;
  currencies = ['XAF','USD','EUR'];
  current_currency1 = 'EUR'
  current_currency2 = 'USD'
  inputCurr = 0

  onCurrChange () {
    console.log("val")
  }
}
