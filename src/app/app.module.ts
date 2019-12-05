import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { InfoComponent } from './info/info.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { CollectionComponent } from './collection/collection.component';
import { BooksService } from './book/book.service'; 
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './shared/user.service';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
 
const appRoutes: Routes = [
  { 
    path: 'home', 
    component: LandingComponent,
    canActivate:[AuthGuard], 
    data: { title: 'Главная' } 
  },
  { 
    path: 'info',  
    component: InfoComponent,
    canActivate:[AuthGuard], 
    data: { title: 'О сайте' }
  },
  { 
    path: 'book',  
    component: BookComponent,
    canActivate:[AuthGuard], 
    data: { title: 'Книги' }
  },
  { 
    path: 'author',  
    component: AuthorComponent,
    canActivate:[AuthGuard], 
    data: { title: 'Автор' }
  },
  { 
    path: 'collection',  
    component: CollectionComponent,
    canActivate:[AuthGuard], 
    data: { title: 'Коллекция' }
  },
  {
    path: 'signup', 
    component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', 
    component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  }    
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    InfoComponent,
    BookComponent,
    AuthorComponent,
    CollectionComponent,
    SignUpComponent,
    SignInComponent,
    UserComponent,
    SignInComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [BooksService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }