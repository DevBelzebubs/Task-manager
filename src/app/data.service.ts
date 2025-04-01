import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = ''
  constructor(private httpClient:HttpClient) { }
  listTasks():Observable<{[key:string]:Task}>{
   return this.httpClient.get<{[key:string]:Task}>(this.url + 'datos.json');
  } 
}
