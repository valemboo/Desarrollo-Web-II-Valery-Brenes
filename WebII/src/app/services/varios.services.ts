import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

//El servicio permite estandarizar elementos que se van a reutilizar
@Injectable({providedIn: 'root'})
export class VariosService {
    
    characters = signal<Character[]>([
        {id:1, name:'Sasuke ', power:9000},
        {id:2, name:'Naruto ', power:10000},
        {id:3, name:'Kakashi ', power:5600},
        {id:4, name:'Itachi ', power:6000},
        {id:5, name:'Hiruzen ', power:450},
    ]);

    //efecto como función autoejecutable
    saveToLocalStorage = effect(()=>{
        console.log(`Conteo de Personajes ${this.characters().length}`);
        //Para enviar al LS como json
        localStorage.setItem('Personajes',JSON.stringify(this.characters()));
    });

    addCharacter(character: Character){
        this.characters.update((list)=>[...list,character]);
    }
}