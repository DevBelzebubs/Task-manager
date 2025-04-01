import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../../models/task.model';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  titleTask!: string;
  descriptionTask!:string;
  fechaActual:Date = new Date();
  constructor(private taskService:TaskService, private ruta:Router){
    
  }
  addTask(){
    if(this.titleTask == undefined || this.descriptionTask == undefined){
      alert('Por favor, completa todos los campos.');
      return;
    }else{
      const task = new Task(this.titleTask,this.descriptionTask,this.fechaActual,false);
      this.taskService.addTask(task);
      this.ruta.navigate(['/']);
    }

  }
}
