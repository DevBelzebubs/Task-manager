import { Component } from '@angular/core';
import {Task} from '../../models/task.model';
import { TaskService } from '../task.service';
import { RouterModule } from '@angular/router';
import { TasksComponent } from "./tasks/tasks.component";
@Component({
  selector: 'app-componente-main',
  imports: [RouterModule, TasksComponent],
  templateUrl: './componente-main.component.html',
  styleUrl: './componente-main.component.css'
})
export class ComponenteMainComponent {
  datePrueba!:Date;
  newtask:Task[] = []
  constructor(public taskService:TaskService){
  }
  ngOnInit(){
    this.taskService.listTask().subscribe((tasks:Task[]) => {
      this.newtask = tasks;
      console.log(this.newtask);
    }
    );
  }
}
