import { Injectable } from '@angular/core';
import {JoinRequest} from '../../../_models/join-request';
import {InviteRequest} from '../../../_models/invite-request';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  joinRequestCount = 4;
  inviteRequestCount = 5;
  allJoinRequests: JoinRequest[];
  allInviteRequests: InviteRequest[];

  constructor() {
    this.allJoinRequests = this.getJoinRequests();
    this.allInviteRequests = this.getInviteRequests();
  }

  getInviteRequests(): InviteRequest[] {
    return JSON.parse(localStorage.getItem('invitations') as string);
  }

  getInviteRequestsOfUser(username: string): InviteRequest[] {
    return this.getInviteRequests().filter(request => request.user.userName === username);
  }

  getJoinRequests(): JoinRequest[] {
    return JSON.parse(localStorage.getItem('requests') as string);
  }

  getJoinRequestsOfUser(username: string): InviteRequest[] {
    return this.getJoinRequests().filter(request => request.user.userName === username);
  }

  setJoinRequests(joinRequests: JoinRequest[]): void {
    localStorage.setItem('requests', JSON.stringify(joinRequests));
  }

  setInviteRequests(inviteRequest: InviteRequest[]): void {
    localStorage.setItem('invitations', JSON.stringify(inviteRequest));
  }

  createJoinRequest(joinRequest: JoinRequest): void {
    const requests = this.getJoinRequests();
    requests.push(joinRequest);
    this.setJoinRequests(requests);
  }

  createInviteRequest(inviteRequest: InviteRequest): void {
    const requests = this.getInviteRequests();
    requests.push(inviteRequest);
    this.setInviteRequests(requests);
  }

  updateJoinRequest(request: JoinRequest, status: string): void {
    const index = this.allJoinRequests.map(joinRequest => joinRequest.id).indexOf(request.id);
    this.allJoinRequests[index].status = status;
    this.setInviteRequests(this.allJoinRequests);
  }

  updateInviteRequest(request: JoinRequest, status: string): void {
    const index = this.allInviteRequests.map(inviteRequest => inviteRequest.id).indexOf(request.id);
    console.log(request);
    console.log(index);
    console.log(this.allInviteRequests[index]);
    this.allInviteRequests[index].status = status;
    this.setInviteRequests(this.allInviteRequests);
  }
}
