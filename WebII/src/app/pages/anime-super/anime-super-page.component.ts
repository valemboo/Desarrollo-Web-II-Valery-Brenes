import { Component, inject, signal} from "@angular/core";
import { CharacterFormComponent } from "../../components/character-form/character-form.component";
import { CharacterListComponent } from "../../components/character-list/character-list.component";
import { VariosService } from "../../services/varios.services";

//Elemento que a nivel de interface cuando se manipula debe cumplir con x requisitos
// interface Character{
//     id:number;
//     name:string;
//     power:number;
// }

@Component({
    selector: 'app-anime', //Identificador
    templateUrl: './anime-super-page.component.html' //Parte visual
    ,
    // IMPORTAR COMPONENTES QUE SE UTILIZAN!!!
    imports: [CharacterFormComponent,CharacterListComponent] //Componente exportado: uso de la parte lógica
})

export class AnimeSuperComponent{

    // INYECTAR SERVICIO DE FORMA TRADICIONAL (quizá no la más funcional)
    // constructor(
    //     public variosService: VariosService
    // ){}

    //INYECTAR SERVICIO DE FORMA MÁS FUNCIONAL Y MODERNA
    public variosService = inject(VariosService);

    /*name = signal('');
    power = signal(0);
    characters = signal<Character[]>([
        {id:1, name:'Sasuke ', power:9000},
        {id:2, name:'Naruto ', power:10000},
        {id:3, name:'Kakashi ', power:5600},
        {id:4, name:'Itachi ', power:6000},
        {id:5, name:'Hiruzen ', power:450},
    ]) //Señal de tipo Character. Cada posición debe cumplir con esos elementos

    addCharacter(character: Character){
        this.characters.update((list)=>[...list,character]);
        /*console.log(this.name(),this.power());
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
}*/
}