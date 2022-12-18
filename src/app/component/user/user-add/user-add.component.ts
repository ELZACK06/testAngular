import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators  } from '@angular/forms';
import { Router } from '@angular/router';


import { UserService } from 'src/app/sevice/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  userformGroup?:FormGroup;

   constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router){}
  ngOnInit(): void {
    
    this.userformGroup=this.formBuilder.group({
      name:["",Validators.required],
      lastname:["",Validators.required],
      email:["",Validators.required],
      tel:["",Validators.required]

    });
   
  }
  createUser():void{
    this.userService.createUsers(this.userformGroup?.value).subscribe(
      {next : user=> this.router.navigateByUrl('/user-list'),}

    )

  }
 

  
}
