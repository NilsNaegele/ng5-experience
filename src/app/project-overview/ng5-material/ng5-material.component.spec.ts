import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng5MaterialComponent } from './ng5-material.component';

describe('Ng5MaterialComponent', () => {
  let component: Ng5MaterialComponent;
  let fixture: ComponentFixture<Ng5MaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng5MaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng5MaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
