import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import {user} from 'src/app/dto/user.model';
import { UserService } from 'src/app/sevice/user.service';
import { datastateEnum, StateOfDataApp } from 'src/app/state/state';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$?:Observable<StateOfDataApp<user[]>>;
  readonly DataStateEnum=datastateEnum;
  constructor(private userService:UserService,private router:Router){}

  ngOnInit(): void {

     this.getUsers();
      
    
  }
  getUsers():void{
    this.users$= this.userService.getUsers().pipe(
      map(data=>({dataState:datastateEnum.LOADED,data:data})),
      startWith({dataState:datastateEnum.LOADING}),
      catchError(err=>of({datastat:datastateEnum.ERROR,errorMessage:err}))
     )
  }
 onUpdate(user:user):void{

     this.router.navigateByUrl("/user-edit/"+user.id);
 }
 deleteUser(user:user):void{ 
  this.userService.deletUser(user.id).subscribe(
    { next : user => this.getUsers()}
  )
 };



}
