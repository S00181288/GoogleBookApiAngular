import { Component, OnInit } from '@angular/core';
import { BookapiService } from '../bookapi.service';
import { Book } from '../book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books-iwill-read',
  templateUrl: './books-iwill-read.component.html',
  styleUrls: ['./books-iwill-read.component.css']
})
export class BooksIWillReadComponent implements OnInit {
Interested: Book[];
  constructor(private _service: BookapiService) { 
    
  }



  ngOnInit() {

 

      this._service.getReadBooks().subscribe(data => {this.Interested = data 
        console.log(this.Interested) })
    
    }
    
  
}




