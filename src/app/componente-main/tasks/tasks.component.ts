import { Component, Input } from '@angular/core';
import { Task } from '../../../models/task.model';
import { RouterOutlet, Router, Route } from '@angular/router';
import { TaskService } from '../../task.service';
@Component({
  selector: 'app-tasks',
  imports: [RouterOutlet],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() task!: Task;
  tasks: Task[] = [];
  constructor(private router: Router, private taskService: TaskService) {}
  editTask(task: Task) {
    this.router.navigate(['tasks/edit', (task as any).id]);
  }
  ngOnInit() {
    this.taskService.listTask().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }
}
