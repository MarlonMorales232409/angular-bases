import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  public heroes : string[] = ["Iron-Man", "Spider-Man", "Hulk", "Thor", "Black Widow"];

  public deletedHero: string = "";


  delHero():void { 
    this.deletedHero = this.heroes.pop() || ""
  }

}
