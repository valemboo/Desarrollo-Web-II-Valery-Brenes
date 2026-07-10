import { Component,input } from "@angular/core";
import { Character } from "../../interfaces/character.interface"; //importar tipo Character de interfaces

@Component({
    selector: 'app-character-list',
    imports:[],
    templateUrl:'./character-list.component.html'
})

export class CharacterListComponent{
    // de dónde vienen, son salidas de información
    characters = input.required<Character[]>() //debe de cumplir con los elementos de Character (id, power...)
    listName = input.required<string>() //required obliga a mandar la información si o si
    //dos formas distintas de enviar la información
}