import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Book } from '../book';
import {BookapiService} from '../bookapi.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() bookData: string;

//Adds Read book to firestore
  addBook(bookData){
    this._service.addbookData(bookData);
   }

   //Adds interested Book to firestore
   addBookToRead(bookData){
    this._service.addInterestedData(bookData);
   }

  constructor(private _service: BookapiService) {
    
   

   }
   
    


  ngOnInit() {
    
  }

  

}
