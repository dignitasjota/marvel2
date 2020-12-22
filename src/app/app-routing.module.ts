import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicComponent } from './comics/comic/comic.component';
import { ComicsComponent } from './comics/comics.component';

const routes: Routes = [
  { path:'', redirectTo: '/comics', pathMatch: 'full' },
  { path:'comics', component: ComicsComponent },
  { path:'comic/:id', component: ComicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
