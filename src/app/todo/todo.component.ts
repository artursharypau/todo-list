import { Component } from '@angular/core';
import { Task } from '../models/task';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  value: string;
  tasks: Task[] = [];

  public check(): void {
    console.log('check');
  }

  public onAdd(): void {
    if (this.value != null) {
      this.tasks.push(new Task(uuidv4(), this.value, false));
      this.value = null;
    }
  }

  onDelete(): void {
    this.tasks = this.tasks.filter(t => t.state === false);
  }

  public onChange(task: Task): void {
    if (!task.state) {
      task.state = true;
    }
    else {
      task.state = false;
    }
  }
}
