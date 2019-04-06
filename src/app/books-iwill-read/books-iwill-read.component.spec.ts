import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksIWillReadComponent } from './books-iwill-read.component';

describe('BooksIWillReadComponent', () => {
  let component: BooksIWillReadComponent;
  let fixture: ComponentFixture<BooksIWillReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksIWillReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksIWillReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
