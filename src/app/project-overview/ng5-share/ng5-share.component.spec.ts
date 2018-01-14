import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng5ShareComponent } from './ng5-share.component';

describe('Ng5ShareComponent', () => {
  let component: Ng5ShareComponent;
  let fixture: ComponentFixture<Ng5ShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng5ShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng5ShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
