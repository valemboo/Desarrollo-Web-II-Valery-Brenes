import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] =>{
    const characters = localStorage.getItem('Personajes');
    //si hay characters en el LS es verdadero, delos en un código que se pueda interpretar. Si no hay nada es falso y devuelva un arreglo vacío
    return characters ? JSON.parse(characters):[];
}

//El servicio permite estandarizar elementos que se van a reutilizar
@Injectable({providedIn: 'root'})
export class VariosService {
    
    characters = signal<Character[]>(loadFromLocalStorage());
    //ahora carga lo que está en el LS, no estos datos 
        // {id:1, name:'Sasuke ', power:9000},
        // {id:2, name:'Naruto ', power:10000},
        // {id:3, name:'Kakashi ', power:5600},
        // {id:4, name:'Itachi ', power:6000},
        // {id:5, name:'Hiruzen ', power:450},

    //señal: variable que detecta cuando hay un cambio en ella
    //efecto como función autoejecutable
    saveToLocalStorage = effect(()=>{
        console.log(`Conteo de Personajes ${this.characters().length}`);
        //Para enviar al LS como json string
        localStorage.setItem('Personajes',JSON.stringify(this.characters()));
    });

//Envía al LS, mas no lo guarda

    addCharacter(character: Character){
        this.characters.update((list)=>[...list,character]);
    }
}