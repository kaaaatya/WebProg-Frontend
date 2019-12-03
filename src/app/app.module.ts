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
import { SignUpComponent } from './sign-up/sign-up.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './shared/user.service';
 
const appRoutes: Routes = [
  { 
    path: 'home', 
    component: LandingComponent,
    data: { title: 'Главная' } 
  },
  { 
    path: 'info',  
    component: InfoComponent,
    data: { title: 'О сайте' }
  },
  { 
    path: 'book',  
    component: BookComponent,
    data: { title: 'Книги' }
  },
  { 
    path: 'author',  
    component: AuthorComponent,
    data: { title: 'Автор' }
  },
  { 
    path: 'collection',  
    component: CollectionComponent,
    data: { title: 'Коллекция' }
  },
  
  
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    InfoComponent,
    BookComponent,
    AuthorComponent,
    CollectionComponent,
    SignUpComponent
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
  providers: [BooksService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }