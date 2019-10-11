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
    CollectionComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }