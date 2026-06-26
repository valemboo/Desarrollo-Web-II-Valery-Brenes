import { Component, signal} from "@angular/core";
import { CharacterFormComponent } from "../../components/character-form/character-form.component";

//Elemento que a nivel de interface cuando se manipula debe cumplir con x requisitos
interface Character{
    id:number;
    name:string;
    power:number;
}
@Component({
    selector: 'app-anime', //Identificador
    templateUrl: './anime-super-page.component.html' //Parte visual
    ,
    imports: [CharacterFormComponent] //Componente exportado
})
export class AnimeSuperComponent{
    name = signal('');
    power = signal(0);
    characters = signal<Character[]>([
        {id:1, name:'Sasuke ', power:9000},
        {id:2, name:'Naruto ', power:10000},
        {id:3, name:'Kakashi ', power:5600},
        {id:4, name:'Itachi ', power:6000},
        {id:5, name:'Hiruzen ', power:450},
    ]) //Señal de tipo Character. Cada posición debe cumplir con esos elementos

    addCharacter(){
        console.log(this.name(),this.power());
        //Validaciones: vacios y valor de power
        if(!this.name() || !this.power() || this.power() <= 0){
            return; //no ejecutar nada
        } 
        const newCharacter: Character = {
            id: this.characters().length + 1,
            name: this.name(),
            power: this.power()
        }
        this.characters().push(newCharacter); //agregar elementos del character al arreglo en la última posición
        this.resetFields();
    }
    //Método para limpiar inputs
    resetFields(){
        this.name.set('');
        this.power.set(0);
    }
}