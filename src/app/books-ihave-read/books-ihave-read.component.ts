import { Component, OnInit } from '@angular/core';
import { BooksIWillReadComponent } from '../books-iwill-read/books-iwill-read.component';
import { BookapiService } from '../bookapi.service';
import { Book } from '../book';

@Component({
  selector: 'app-books-ihave-read',
  templateUrl: './books-ihave-read.component.html',
  styleUrls: ['./books-ihave-read.component.css']
})
export class BooksIHaveReadComponent implements OnInit {

Read: Book[];

  constructor(private _service: BookapiService) { }

  ngOnInit() {
    this._service.getInterestedBooks().subscribe(data => {this.Read = data 
      console.log(this.Read) })
  }

}
