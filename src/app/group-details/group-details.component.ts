import {Component, OnInit} from '@angular/core';
import {Group} from '../_models/group';
import {ActivatedRoute} from '@angular/router';
import {GroupService} from '../_shared/services/group/group.service';
import {User} from '../_models/user';
import {Task} from '../_models/task';
import {UserService} from '../_shared/services/user/user.service';
import {TaskService} from '../_shared/services/task/task.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {
  group: Group;
  id: number;
  users: User[];
  tasks: Task[];

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private userService: UserService,
    private taskService: TaskService
  ) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') as string, 10);
    
    console.log(this.id);
    
    this.group = this.getGroup(this.id);
    this.users = this.getUsers(this.id);
    this.tasks = this.getTasks(this.id);
  }

  ngOnInit(): void {
  }

  getGroup(id: number): Group {
    return this.groupService.getGroup(id);
  }

  getUsers(groupId: number): User[] {
    return this.userService.getUsersOfGroup(groupId);
  }

  getTasks(groupId: number): Task[] {
    return this.taskService.getTasksOfGroup(groupId);
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
    this.tasks = this.getTasks(this.id);
  }
}
