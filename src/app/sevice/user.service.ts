import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import {user} from '../dto/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
 
  constructor(private http:HttpClient) {    }

  getUsers():Observable<user[]>{
   return this.http.get<user[]>(environment.apiUrl+"/users")
  }
  createUsers(user:user):Observable<user>{
     
   return this.http.post<user>(environment.apiUrl+"/users",user);
 }
 updateProduct(user:user):Observable<user>{
  return this.http.put<user>(environment.apiUrl+"/users/"+user.id,user);
 }
 getUser(id:number):Observable<user>{
  return this.http.get<user>(environment.apiUrl+"/users/"+id);
 }
 deletUser(id:number):Observable<user>{
  return this.http.delete<user>(environment.apiUrl+"/users/"+id);
 }


}