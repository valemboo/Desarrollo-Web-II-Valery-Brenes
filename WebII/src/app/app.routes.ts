// Archivo para enlazar cada uno de los archivos, indicar las rutas
import { Routes } from '@angular/router';
// Importar componente
import { CounterPageComponent } from './pages/counter/counter.component';

import { heroPageComponent } from './pages/hero/hero-page.component';
import { AnimeComponent } from './pages/anime/anime-page.component';

export const routes: Routes = [
    //Cada posición del arreglo indica un objeto
    {
        //Path indica que se le va a agregar a la dirección de dominio
        path:'',
        component: CounterPageComponent, //cargar cuando es la url inicial
    },

    {
        path:'heroes', 
        component: heroPageComponent, //Mostrar la clase hero si el path es
    },

    {
        path:'anime', 
        component: AnimeComponent //Mostrar la clase anime
    }
];
