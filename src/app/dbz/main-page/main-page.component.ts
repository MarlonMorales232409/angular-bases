import { Component } from '@angular/core';

import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {



  public character: Character = {
    name  : 'Master Roshi',
    power : 10000

  }

  constructor(private dbzService: DbzService){
    
  }
}
