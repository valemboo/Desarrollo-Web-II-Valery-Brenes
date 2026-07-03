import { Component,output,signal } from "@angular/core";
import { Character } from "../../interfaces/character.interface"; //importar tipo Character de interfaces

@Component({
    selector: 'app-character-form',
    imports:[],
    templateUrl:'./character-form.component.html'
})

export class CharacterFormComponent{
    name = signal('');
    power = signal(0);
    newCharacter = output <Character>(); //permite generar salidas de información

    addCharacter(){
        if(!this.name() || !this.power() || this.power() <= 0){
        return; //no ejecutar nada
        } 
        const newCharacter: Character = {
            //id: this.characters().length + 1,
            id: Math.floor(Math.random()*1000), //redondear un número aleatorio, rango hasta mil
            name: this.name(),
            power: this.power()
        }
        //this.characters().push(newCharacter); //agregar elementos del character al arreglo en la última posición
        this.newCharacter.emit(newCharacter); //enviar información

        console.log({newCharacter});
        this.resetFields();
    }
//Método para limpiar inputs
    resetFields(){
            this.name.set('');
            this.power.set(0);
    }
}
