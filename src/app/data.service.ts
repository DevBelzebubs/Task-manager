import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'https://task-management-cce5f-default-rtdb.firebaseio.com/';
  constructor(private httpClient:HttpClient){}
  addTask(task:Task):Observable<{name: string}>{
    return this.httpClient.post<{name:string}>(this.url + 'datos.json', task);
  }
  listTasks():Observable<{[key:string]:Task}>{
   return this.httpClient.get<{[key:string]:Task}>(this.url + 'datos.json');
  }
  editTask(id:string,task:Task):Observable<Task>{
    return this.httpClient.put<Task>(this.url + 'datos/' + id + '.json', task);
  }
  deleteTask(id:string):Observable<Task>{
    return this.httpClient.delete<Task>(this.url + 'datos/' + id + '.json');
  }
  getTaskById(id:string): Observable<Task>{
    return this.httpClient.get<Task>(this.url + 'datos/' + id + '.json');
  }
}
