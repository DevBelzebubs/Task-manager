import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route,Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-side-bar-nav',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './side-bar-nav.component.html',
  styleUrls: ['./side-bar-nav.component.css']
})
export class SideBarNavComponent {
  @Input() sidebarVisible:boolean = false;
  @Output() sidebarInvisible = new EventEmitter<boolean>();
  subMenuVisible:boolean = false
  rotatedArrow:boolean = false;
  animatingOut:boolean = false;
  btnanimating: boolean = false;
  closeSidebar(){
    this.sidebarInvisible.emit(false);
  }
  toggleSubmenu(){
    if(this.subMenuVisible){
      this.animatingOut = true;
      setTimeout(()=>{
        this.subMenuVisible = false;
        this.animatingOut = false;
      }, 500);
    }else{
      this.subMenuVisible = true;
      this.animatingOut = false;
    }
    if (this.btnanimating) {
          this.btnanimating = false;
  } else {
      this.btnanimating = true;
  }
  }
  constructor(private ruta:Router) {}
  goMain(){
    this.ruta.navigate(['/']);
    this.closeSidebar();
  }
  rotateImage(){
    this.rotatedArrow = !this.rotatedArrow;
  }
  goError401(){
  }
  goError404(){
    this.ruta.navigate(['/**']);
    this.closeSidebar();
  }
  goError500(){

  }
}
