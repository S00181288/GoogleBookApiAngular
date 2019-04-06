import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookapiService {


  private _siteURL = 'https://www.googleapis.com/books/v1/volumes?q=';
  private _key = '&key=AIzaSyDY7cvXQUdQc4MPrxKAzJcKke8aTAWr08k';

//Gets book info


  constructor( private _http: HttpClient ) { };

getBookInfo(bookName: string): Observable<Book> {
  return this._http.get<Book>(this._siteURL + bookName + this._key).pipe(tap(data => console.log('All: ' + JSON.stringify(data))));

}

}
