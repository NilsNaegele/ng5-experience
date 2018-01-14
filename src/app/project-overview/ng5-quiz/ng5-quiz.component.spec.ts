import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng5QuizComponent } from './ng5-quiz.component';

describe('Ng5QuizComponent', () => {
  let component: Ng5QuizComponent;
  let fixture: ComponentFixture<Ng5QuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng5QuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng5QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
