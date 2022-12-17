import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  // @Input() listOfCharacters: Character[] = []
  constructor(private dbzService: DbzService){}

  get listOfCharacters(){
    return this.dbzService.listOfCharacters
  }


}
