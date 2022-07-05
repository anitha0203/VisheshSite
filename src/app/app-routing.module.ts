import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { ServicesComponent } from './services/services.component';
import { UpdateComponent } from './update/update.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';
import { AttendComponent } from './attend/attend.component';

const routes: Routes = [
  {path:'add-emp', component: AddEmpComponent},
  {path:'emp-list', component: EmpListComponent},
  {path:'about', component: AboutComponent},
  {path:'home', component: HomeComponent},
  {path:'book-list', component: BookListComponent},
  {path:'services', component: ServicesComponent},
  {path:'update', component: UpdateComponent},
  {path:'', component: HomeComponent},
  {path:'delete-emp', component: DeleteEmpComponent},
  {path:'attend', component: AttendComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
