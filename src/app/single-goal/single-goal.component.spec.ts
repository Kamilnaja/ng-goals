import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGoalComponent } from './single-goal.component';

describe('SingleGoalComponent', () => {
  let component: SingleGoalComponent;
  let fixture: ComponentFixture<SingleGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
