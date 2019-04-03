import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { NewsComponent } from './news/news.component';
import { PicsComponent } from './pics/pics.component';
import { MoviesComponent } from './movies/movies.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AllComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'pics',
    component: PicsComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  }

 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
