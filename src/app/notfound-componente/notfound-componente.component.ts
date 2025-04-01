import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound-componente',
  imports: [],
  templateUrl: './notfound-componente.component.html',
  styleUrl: './notfound-componente.component.css'
})
export class NotfoundComponenteComponent {
  constructor(private ruta:Router){}
  goBack(){
    this.ruta.navigate(['/']);
  }
}
