import { Component } from "@angular/core";


@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent {

    public name : string = "Iron-Man";
    public age  : number = 45;
    
    get getCapitaliceName():string {
        return this.name.toUpperCase();
    }

    getName():string {
        return `name: ${this.name} - age ${this.age}`;
    }

    changeName(): void {
        this.name = 'Spider-Man'
    }

    changeAge(): void {
        this.age = 30
    }

}