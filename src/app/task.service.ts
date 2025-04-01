import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  newtasks: Task[] = [new Task('Tarea', 'Descripcion 1', new Date(), false), new Task('Ejercicio', 'Descripcion 2', new Date(), false), new Task('Programar', 'Descripcion 3', new Date(), false)];
  filteredTasks: Task[] = [];
  isFiltered:boolean = false;
  constructor(){ }
  addTask(task: Task) {
    return this.newtasks.push(task);
  }
  listTask(){
    return this.newtasks;
  }
  searchTask(title:string){
    if(title.trim() === ''){
      this.isFiltered = false;
      this.filteredTasks = this.newtasks;
    }else{
      this.filteredTasks = this.newtasks.filter(task => 
        task.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    this.isFiltered = true;
  }
}
