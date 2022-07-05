import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BookListComponent } from './book-list/book-list.component';
import { ServicesComponent } from './services/services.component';
import { UpdateComponent } from './update/update.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';
import { AttendComponent } from './attend/attend.component';
import { MatRadioModule } from '@angular/material/radio';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    AddEmpComponent,
    HomeComponent,
    AboutComponent,
    BookListComponent,
    ServicesComponent,
    UpdateComponent,
    DeleteEmpComponent,
    AttendComponent,
    RxjsComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatIconModule,MatAutocompleteModule,HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
