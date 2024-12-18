import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../models/task.model';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  tasks: Task[] = [
    { id: 1, title: 'Tarefa 1', description: 'Descrição da tarefa 1', status: 'todo' },
    { id: 2, title: 'Tarefa 2', description: 'Descrição da tarefa 2', status: 'doing' },
    { id: 3, title: 'Tarefa 3', description: 'Descrição da tarefa 3', status: 'done' }
  ];

  getTodoTasks(): Task[] {
    return this.tasks.filter(task => task.status === 'todo');
  }

  getDoingTasks(): Task[] {
    return this.tasks.filter(task => task.status === 'doing');
  }

  getDoneTasks(): Task[] {
    return this.tasks.filter(task => task.status === 'done');
  }
}
