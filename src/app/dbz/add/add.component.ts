import { Component, Input, } from '@angular/core';

import { DbzService } from '../services/dbz.service';

import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {

  @Input() public character: Character = {
    name  : '',
    power : 0

  }

  
  constructor(private dbzService: DbzService) {}
  
  submit(){

    if(this.character.name.trim().length < 1) return
    
    this.dbzService.addNewCharacter(this.character)

    this.character = {
      name : '',
      power: 0
    }

  }
  
}
