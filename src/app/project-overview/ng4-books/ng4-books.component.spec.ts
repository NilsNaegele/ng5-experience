import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng4BooksComponent } from './ng4-books.component';

describe('Ng4BooksComponent', () => {
  let component: Ng4BooksComponent;
  let fixture: ComponentFixture<Ng4BooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng4BooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng4BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
