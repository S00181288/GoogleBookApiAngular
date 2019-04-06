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


  constructor(private _service: BookapiService) {
    
   

   }
   
    


  ngOnInit() {
    
  }

  

}
