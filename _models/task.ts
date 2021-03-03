import {Group} from './group';
import {User} from './user';

export class Task {
  id: number;
  title: string;
  description: string;
  assignmentStatus: string;
  progressStatus: string;
  group?: Group;
  user?: User;

  constructor(id: number, title: string, description: string, assignmentStatus: string, progressStatus: string, group?: Group, user?: User) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.assignmentStatus = assignmentStatus;
    this.progressStatus = progressStatus;
    this.group = group;
    this.user = user;
  }
}

// assignmentStatus can be "assigned" or "unassigned"
// progressStatus can be none, in progress or completed

// once assigned, progressStatus moves from none to in progress.
