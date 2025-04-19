import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-edit-task',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {
  task!:Task;
  id!:string;
  showTitleMessage: boolean = false;
  showDescMessage: boolean = false;
  constructor(private taskService: TaskService, private route: ActivatedRoute, private router:Router){}
  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id')!;
    if(this.id){
      this.taskService.getTaskById(this.id).subscribe((task:Task) => {
        this.task = task;
      });
    }
  }
  verifyField(task:Task){
    this.showTitleMessage = task.title.trim() === '';
    this.showDescMessage = task.description.trim() === '';
  }
  editarCambios(){
    this.verifyField(this.task);
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
      this.taskService.editTask(this.id, this.task).subscribe(() => {
        alert('Task edited successfully!');
        this.router.navigate(['/']);
      });
    }
  }
  eliminarTarea(){
    if(confirm('Are you sure you want to delete this task?')){
      this.taskService.deleteTask(this.id).subscribe(() => {
        alert('Task deleted successfully!');
        this.router.navigate(['/']);
      });
    }
  }
}
