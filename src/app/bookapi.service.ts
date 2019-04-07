import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookapiService {

  //Url For Api call.
  private _siteURL = 'https://www.googleapis.com/books/v1/volumes?q=';
  private _key = '&key=AIzaSyDY7cvXQUdQc4MPrxKAzJcKke8aTAWr08k';

  //Service Wrapper around the native firestores SDK's
  // CollectionReference and Query types.
  //This is the ReadBooks list
  bookDataCollection: AngularFirestoreCollection<Book>;

  //Interested Collection
  InterestedDataCollection: AngularFirestoreCollection<Book>;
  

  booksData: Observable<Book[]>;
  InterestedbooksData: Observable<Book>[];


  //Array to hold all books
  AllbooksData: Book[];

  //Holds an error message
  errorMessage: string;

  


//Collections are listed in here for firebase
  constructor( private _http: HttpClient, private _afs: AngularFirestore ) { 
    this.bookDataCollection = this._afs.collection<Book>("Read_Books")
    this.InterestedDataCollection = this._afs.collection<Book>("Interested_Books")
  };

  


  //Gets book info
getBookInfo(bookName: string): Observable<Book> {
  return this._http.get<Book>(this._siteURL + bookName + this._key).pipe(tap(data => console.log('All: ' + JSON.stringify(data))));

}

//Read Book collection
getBookdata(): Observable<Book[]> {
  //valueChanged() reruns the current state of the collection as
  // an Observable of data as a synchronised array of JSON objects
  this.booksData = this.bookDataCollection.valueChanges();

  //As the data is now available as a an Observable just subscribe and the data will start to flow.
  //Also output the data to the console.
  this.booksData.subscribe(data => console.log("getbooksData: " + JSON.stringify(data)))
  return this.booksData;

}

//Interested Book collection
getInteresteddata(): Observable<Book[]> {
  //valueChanged() reruns the current state of the collection as
  // an Observable of data as a synchronised array of JSON objects
  this.booksData = this.InterestedDataCollection.valueChanges();

  //As the data is now available as a an Observable just subscribe and the data will start to flow.
  //Also output the data to the console.
  this.booksData.subscribe(data => console.log("getbooksData: " + JSON.stringify(data)))
  return this.booksData;

}


//This is the ReadBooks list
 //adding a book to firestore
 addbookData(data: Book): void {
  //Firebase throws an error if the car object is passed directly. A solution/hack
  //is to stringify and parse the data into a raw object and pass it this way
  this.bookDataCollection.add(JSON.parse(JSON.stringify(data)));

}

//This is the Interested list
 //adding a book to firestore
 addInterestedData(data: Book): void {
  //Firebase throws an error if the car object is passed directly. A solution/hack
  //is to stringify and parse the data into a raw object and pass it this way
  this.InterestedDataCollection.add(JSON.parse(JSON.stringify(data)));

}

//Get interested books from firestore
getInterestedBooks(): Observable<Book[]>{
  this.booksData = this.InterestedDataCollection.valueChanges();
console.log(this.booksData);
  return this.booksData;
}

//Get Read books.
getReadBooks(): Observable<Book[]>{
  this.booksData = this.bookDataCollection.valueChanges();
console.log(this.booksData);
  return this.booksData;
}


}
