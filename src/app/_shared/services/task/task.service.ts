import {Injectable} from '@angular/core';
import {Task} from '../../../_models/task';
import {Group} from "../../../_models/group";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskCount = 4;
  allTasks: Task[];

  constructor(
  ) {
    this.allTasks = this.getTasks();
  }

  getTasks(): Task[] {
    return JSON.parse(localStorage.getItem('tasks') as string);
  }

  getTask(taskId: number): Task {
    return this.getTasks().find(task => task.id === taskId) as Task;
  }

  getTasksOfGroup(groupId: number): Task[] {
    if (this.getTasks()) {
      return this.getTasks().filter(task => task.group?.id === groupId);
    }
    return [];
  }

  setTasks(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  updateTask(taskId: number, task: Task): void {
    this.deleteTask(taskId);
    this.allTasks.push(task);
    this.setTasks(this.allTasks);
  }

  deleteTask(taskId: number): void {
    const index = this.allTasks.findIndex(task => task.id === taskId);
    if (index !== 1) { this.allTasks.splice(index, 1); }
    this.setTasks(this.allTasks);
  }
}
