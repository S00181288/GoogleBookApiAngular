import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksIHaveReadComponent } from './books-ihave-read.component';

describe('BooksIHaveReadComponent', () => {
  let component: BooksIHaveReadComponent;
  let fixture: ComponentFixture<BooksIHaveReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksIHaveReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksIHaveReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
