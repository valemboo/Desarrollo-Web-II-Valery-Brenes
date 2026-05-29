import { Component, signal } from "@angular/core"; // Importar librería. Trabajar con componentes y señales

@Component({ //Enlazarlo
    templateUrl:'./counter.component.html', // Indicar qué quiero mostrar
    styleUrl: './counter.component.css' // Indicar la estética
})
export class CounterPageComponent{
    contador = 10;
    contadorSignal = signal(5); // (Indica el valor inicial)
    // Método recibe parámetro tipo numérico
    increaseBy(value:number){
        this.contador += value;
        this.contadorSignal.set(this.contadorSignal()+value); //para señal
    }
    reset(){ //restablecer valores
        this.contador = 10;
        this.contadorSignal.set(5);
    }
}
