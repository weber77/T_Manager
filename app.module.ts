import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './_shared/components/header/header.component';
import { FooterComponent } from './_shared/components/footer/footer.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { GroupsComponent } from './groups/groups.component';
import { MyGroupsComponent } from './my-groups/my-groups.component';
import { CreateGroupComponent } from './creategroup/creategroup.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import {CreateTaskComponent} from './createtask/createtask.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AdminsComponent } from './admins/admins.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { RequestsComponent } from './requests/requests.component';

// import { DragDropModule } from "@angular/cdk/drag-drop";

const routes: Routes = [
  // { path: "", component: HomeComponent },
  { path: '', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'users', component: UsersComponent },
  { path: 'admins', component: AdminsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'invitations', component: InvitationsComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'allgroups', component: GroupsComponent },
  { path: 'mygroups', component: MyGroupsComponent },
  { path: 'groups/creategroup', component: CreateGroupComponent },
  { path: 'groups/:id', component: GroupDetailsComponent },
  { path: 'groups/:id/createtask', component: CreateTaskComponent },
  { path: 'groups/:groupId/tasks/:taskId', component: EditTaskComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    UsersComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    GroupsComponent,
    MyGroupsComponent,
    CreateGroupComponent,
    GroupDetailsComponent,
    CreateTaskComponent,
    EditTaskComponent,
    AdminsComponent,
    InvitationsComponent,
    RequestsComponent
  ],
  imports: [
    // DragDropModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
