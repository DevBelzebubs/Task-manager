import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  titleTask: string = '';
  descriptionTask:string = '';
  fechaActual:Date = new Date();
  showTitleMessage: boolean = true;
  showDescMessage: boolean = true;
  constructor(private taskService:TaskService, private ruta:Router, private route:ActivatedRoute){}
  verifyField(){
    this.showTitleMessage = this.titleTask.trim() === '';
    this.showDescMessage = this.descriptionTask.trim() === '';
  }
  addTask(){
    this.verifyField();
    if(this.showTitleMessage || this.showDescMessage){
      const warnElement = document.querySelectorAll('.warn');
      if (warnElement){
        warnElement.forEach((element) => {
          element.textContent = 'Please, complete all fields.';
          element.classList.add('warning');
        }
      )}
      return;
    }else{
      const task = new Task(this.titleTask,this.descriptionTask,this.fechaActual,false);
      this.taskService.addTask(task);
      this.ruta.navigate(['/']);
    }
  }
}
