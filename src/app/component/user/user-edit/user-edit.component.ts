import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/sevice/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userformGroup?:FormGroup;
  userId:number;
  constructor(private router:Router,private activateRoute:ActivatedRoute,private userService:UserService,private formBuilder:FormBuilder){
    this.userId=activateRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
  
   
   this.getUserForm(this.userId);
    
  }
  getUserForm(id:number):void{
    this.userService.getUser(id).subscribe(
      user=>{
        this.userformGroup=this.formBuilder.group({
          id:[user.id,Validators.required],
          name:[user.name,Validators.required],
          lastname:[user.lastname,Validators.required],
          email:[user.email,Validators.required],
          tel:[user.tel,Validators.required]
    
        });
      }
    )
  };
  updateUser():void{
   
  this.userService.updateProduct(this.userformGroup?.value).subscribe(
    {next : user=> this.router.navigateByUrl('/user-list'),}
  )
  }
}
