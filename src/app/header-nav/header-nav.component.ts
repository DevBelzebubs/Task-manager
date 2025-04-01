import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { SideBarNavComponent } from "./side-bar-nav/side-bar-nav.component";
import { TaskService } from '../task.service';
@Component({
  selector: 'app-header-nav',
  imports: [FormsModule, SidebarModule, ButtonModule, SideBarNavComponent],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css'
})
export class HeaderNavComponent {
  toggleSidebarVisible: boolean = false;
  searchTaskInput: string = '';
  constructor(private serviceTask:TaskService){}
  toggleSidebar() {
    this.toggleSidebarVisible = !this.toggleSidebarVisible;
  }
  onSidebarInvisible(event:boolean){
    this.toggleSidebarVisible = event;
  }
  searchTask(title:string){
    console.log(title);
    this.serviceTask.searchTask(title);
  }
}
