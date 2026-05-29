// Archivo para enlazar cada uno de los archivos, indicar las rutas
import { Routes } from '@angular/router';
// Importar componente
import { CounterPageComponent } from './pages/counter/counter.component';

export const routes: Routes = [
    //Cada posición del arreglo indica un objeto
    {
        //Path indica que se le va a agregar a la dirección de dominio
        path:'',
        component: CounterPageComponent, //cargar cuando es la url inicial
    }
];
