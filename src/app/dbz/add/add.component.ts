import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @Input() public character: Character = {
    name  : '',
    power : 0

  }

  // @Output() onAddNewCharacter : EventEmitter<Character> = new EventEmitter()

  constructor(private dbzService: DbzService) {}
  
  submit(){

    if(this.character.name.trim().length < 1) return

    // this.onAddNewCharacter.emit(this.character) 
    
    this.dbzService.addNewCharacter(this.character)

    this.character = {
      name : '',
      power: 0
    }

  }
  
}
