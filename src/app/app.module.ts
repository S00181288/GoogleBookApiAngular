import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFeatureComponent } from './search-feature/search-feature.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './book/book.component';
import { setTheme } from 'ngx-bootstrap/utils';


@NgModule({
  declarations: [
    AppComponent,
    SearchFeatureComponent,
    MenuBarComponent,
    routingcomponents,
    PagenotfoundComponent,
    BookComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
