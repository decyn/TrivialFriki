import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
// ***** COMPONENTES VISIBILIDAD *******
import {CabeceraComponent} from "./components/cabecera.component";
// ***** COMPONENTES APP *****
import {InicioComponent} from "./components/inicio.component";
import {RegistroComponent} from "./components/registro.component";
import {JuegoComponent} from "./components/juego.component";

@Component({
  selector: "trivialFriki",
  templateUrl: "app/views/app.html",
  directives: [ROUTER_DIRECTIVES, CabeceraComponent, InicioComponent, RegistroComponent]
})

@RouteConfig([
  {path: "/inicio", name: "Inicio", component: InicioComponent, useAsDefault: true},
  {path: "/registro", name: "Registro", component: RegistroComponent},
  {path: "/juego:id", name: "Juego", component: JuegoComponent}
  //{path: "/clasificaciones", name: "Clasificacion", component: ClasificacionComponent}
])

export class AppComponent {

}
