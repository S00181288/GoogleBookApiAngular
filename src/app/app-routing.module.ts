import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksIHaveReadComponent } from './books-ihave-read/books-ihave-read.component';
import { BooksIWillReadComponent } from './books-iwill-read/books-iwill-read.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { componentFactoryName } from '@angular/compiler';
import { SearchFeatureComponent } from './search-feature/search-feature.component';

const routes: Routes = [
  {path: 'ReadBooks', component: BooksIHaveReadComponent},
  {path: 'BooksToRead', component: BooksIWillReadComponent},
  {path: 'Search', component: SearchFeatureComponent},
  {path: '**', component: PagenotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [BooksIHaveReadComponent,
                                  BooksIWillReadComponent,
                                  PagenotfoundComponent,
                                  SearchFeatureComponent]