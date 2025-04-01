import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNavComponent } from "./header-nav/header-nav.component";
import { ComponenteMainComponent } from "./componente-main/componente-main.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderNavComponent, ComponenteMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto-tareas';
  isSideBarOpen:boolean = false;
}
