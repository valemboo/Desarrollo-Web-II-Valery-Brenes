import { Component, signal } from "@angular/core";

@Component({ 
    templateUrl:'./hero-page.component.html',
    styleUrl: './hero-page.component.css'
})
export class heroPageComponent{
    name = signal('Harley Quinn');
    age = signal('28 años');
    description = signal('');

    changeName(){
        this.name.set('Wonder Woman');
    }
    changeAge(){
        this.age.set('30 años');
    }
    getHeroDescription(){
        if (this.name() == 'Harley Quinn'){
            return('Harley Quinn era una psiquiatra llamada Harleen Quinzel. Se volvió una villana/antiheroína muy impredecible, divertida y experta usando mazos y bates.');
        } else{
            return('Diana Prince es una guerrera amazona con súper fuerza, velocidad y habilidades de combate. Usa el Lazo de la Verdad y lucha por la paz y la justicia.');
        }
    }
    reset(){
        this.name.set('Harley Quinn')
        this.age.set('28 años')
    }
}