import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  newtasks: { [id: string]: Task } = {
    t1: new Task('Tarea', 'Descripcion 1', new Date(), false),
    t2: new Task('Ejercicio', 'Descripcion 2', new Date(), false),
    t3: new Task('Programar', 'Descripcion 3', new Date(), false),
  };
  filteredTasks: Task[] = [];

  isFiltered: boolean = false;
  constructor(private dataService: DataService) {}
  addTask(task: Task) {
    this.dataService.addTask(task).subscribe((response) => {
      const id = response.name;
      this.newtasks[id] = task;
    });
  }
  listTask(): Observable<Task[]> {
    return this.dataService.listTasks().pipe(
      map((tasksObj) => {
        const fbTasks = tasksObj
          ? Object.entries(tasksObj).map(([id, task]) => {
              const t = new Task(
                task.title,
                task.description,
                new Date(task.createdAt),
                task.completed
              );
              (t as any).id = id;
              return t;
            })
          : [];

        const localTasks = Object.values(this.newtasks);
        return [...localTasks, ...fbTasks];
      })
    );
  }
  editTask(id: string, task: Task): Observable<Task> {
    return this.dataService.editTask(id, task);
  }
  deleteTask(id: string) {
    return this.dataService.deleteTask(id);
  }
  searchTask(title: string) {
    if (title.trim() === '') {
      this.isFiltered = false;
      this.listTask().subscribe((tasks) => {
        this.filteredTasks = tasks;
      });
    } else {
      this.listTask().subscribe((tasks) => {
        this.filteredTasks = tasks.filter((task) =>
          task.title.toLowerCase().includes(title.toLowerCase())
        );
      });
    }
    this.isFiltered = true;
  }
  getTaskById(id: string): Observable<Task> {
    return this.dataService.getTaskById(id);
  }
}
