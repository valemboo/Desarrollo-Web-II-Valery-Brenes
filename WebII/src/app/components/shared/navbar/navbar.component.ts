import { Component} from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector:'app-navbar', //nombre para llamar al componente y usarlo
    templateUrl:'./navbar.component.html', //Archivo al que se enlaza
    imports: [RouterLink, RouterLinkActive]
})
export class NavbarComponent{

}