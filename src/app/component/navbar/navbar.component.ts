import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
   isUserList:boolean=false;
  constructor(private router:Router){

  }
  ngOnInit(): void {
   this.router.events.pipe(filter(event => event instanceof NavigationEnd )
   ).subscribe((event:any)=> {
            this.isUserList=event.url=='/user-list';
        });
  }
}
