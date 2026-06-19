import { Component, signal} from "@angular/core";

//Elemento que a nivel de interface cuando se manipula debe cumplir con x requisitos
interface Character{
    id:number;
    name:string;
    power:number;
}
@Component({
    selector: 'app-anime', //Identificador
    templateUrl: './anime-page.component.html' //Parte visual
})
export class AnimeComponent{
    name = signal('');
    power = signal(0);
    characters = signal<Character[]>([
        {id:1, name:'Sasuke ', power:9000},
        {id:2, name:'Naruto ', power:10000},
        {id:3, name:'Kakashi ', power:5600},
        {id:4, name:'Itachi ', power:6000},
        {id:5, name:'Hiruzen ', power:450},
    ]) //Señal de tipo Character. Cada posición debe cumplir con esos elementos
}