import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng5TalkToMeComponent } from './ng5-talk-to-me.component';

describe('Ng5TalkToMeComponent', () => {
  let component: Ng5TalkToMeComponent;
  let fixture: ComponentFixture<Ng5TalkToMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng5TalkToMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng5TalkToMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
