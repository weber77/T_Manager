import { Component, OnInit } from '@angular/core';
import {User} from '../_models/user';
import {Task} from '../_models/task';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../_shared/services/user/user.service';
import {TaskService} from '../_shared/services/task/task.service';
import {GroupService} from '../_shared/services/group/group.service';
import {Group} from '../_models/group';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css']
})
export class CreateTaskComponent implements OnInit {
  groupMembers: User[];
  task: Task;
  id: number;
  group: Group;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private taskService: TaskService,
    private groupService: GroupService
  ) {
    this.task = new Task(0, '', '', 'unassigned', 'none', undefined, undefined);
    this.id = parseInt(this.route.snapshot.paramMap.get('id') as string, 10);
    this.groupMembers = this.getGroupMembers(this.id);
    this.group = this.getGroup();
  }

  ngOnInit(): void {
  }

  getGroupMembers(groupId: number): User[] {
    return this.userService.getUsersOfGroup(groupId);
  }

  addTask(): void {
    console.log(this.task);
    this.taskService.taskCount += 1;
    this.task.id = this.taskService.taskCount;
    this.task.group = this.groupService.getGroup(this.id);

    if (this.task.user) {
      this.task.assignmentStatus = 'assigned';
      this.task.progressStatus = 'in progress';
    }

    const tasks = this.taskService.getTasks();
    tasks.push(this.task);
    this.taskService.setTasks(tasks);
    this.router.navigate(['/groups', this.id]);
    console.log(this.task);
  }

  getGroup(): Group {
    return this.groupService.getGroup(this.id);
  }
}
