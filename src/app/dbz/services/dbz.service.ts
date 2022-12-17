import { Injectable } from "@angular/core";
import { Character } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _listOfCharacters: Character[] = [
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

    get listOfCharacters(): Character[] {
        return [...this._listOfCharacters]
    }

    // constructor(){
    //     console.log('Service initialized')
    // }


    /**
    * Recibe a new character comming from add component and add it to 
    * lisOfCharacters array, wich is being rendering on the screen
    * @param character The new character recived by the Event
    */
    addNewCharacter(character: Character){
      this._listOfCharacters.push(character)
    }



}