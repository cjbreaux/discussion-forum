import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllComponent } from './all/all.component';
import { MoviesComponent } from './movies/movies.component';
import { PicsComponent } from './pics/pics.component';
import { NewsComponent } from './news/news.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllComponent,
    MoviesComponent,
    PicsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
