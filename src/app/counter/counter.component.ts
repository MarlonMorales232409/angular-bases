import { Component } from '@angular/core';

// todo: do something

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {

  public title  : string = 'Counter App';
  public number : number = 10
  public base   : number = 5

  acumulator( value: number ) {
    this.number += value
  }
}
