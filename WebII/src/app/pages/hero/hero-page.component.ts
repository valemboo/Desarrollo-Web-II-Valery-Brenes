import { Component, signal } from "@angular/core";

@Component({ 
    templateUrl:'./hero-page.component.html',
    styleUrl: './hero-page.component.css'
})
export class heroPageComponent{
    name = signal('Harley Quinn');
    age = signal('28 años');

    changeInfo(){
        this.name.set('Wonder Woman');
        this.age.set('30 años');
    }
    getHeroDescription(){

    }
    reset(){

    }
}