import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { BookapiService } from '../bookapi.service';
import { HttpClient } from '@angular/common/http';
import { Book } from '../book';


@Component({
  selector: 'app-search-feature',
  templateUrl: './search-feature.component.html',
  styleUrls: ['./search-feature.component.css']
})
export class SearchFeatureComponent implements OnInit {

  @Input() bookData: Book;
  
  constructor(private _service: BookapiService) {}



  getBooksInformation(bookName: string): boolean {
    this._service.getBookInfo(bookName).subscribe(bookData =>
      this.bookData = bookData);
    return false

  }



  ngOnInit() {
  }

}
