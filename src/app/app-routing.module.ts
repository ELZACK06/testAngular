import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './component/user/user-add/user-add.component';
import { UserEditComponent } from './component/user/user-edit/user-edit.component';
import { UserListComponent } from './component/user/user-list/user-list.component';

const routes: Routes = [
  {path:'user-list',component:UserListComponent},
  {path:'user-add',component:UserAddComponent},
  {path:'user-edit/:id',component:UserEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
