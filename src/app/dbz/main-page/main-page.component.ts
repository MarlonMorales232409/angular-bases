import { Component } from '@angular/core';

interface Character {
  name  : string,
  power : number,
  
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  public listOfCharacters: Character[] = [

    {
      name: 'Goku',
      power: 15000,
    },
    {
      name: 'Vegetta',
      power: 13000,
    },
    {
      name: 'Krillin',
      power: 10000,
    }

  ]

  public character: Character = {
    name  : '',
    power : 0

  }

  submit(){

    if(this.character.name.trim().length < 1) return

    console.log(this.character)

    this.listOfCharacters.push(this.character)

    this.character = {
      name : '',
      power: 0
    }

  }


}
