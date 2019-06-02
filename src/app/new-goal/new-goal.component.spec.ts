import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGoalComponent } from './new-goal.component';
import { FormBuilder } from '@angular/forms';
import { GoalsService } from '../goals/goals.service';

describe('NewGoalComponent', () => {
  let component: NewGoalComponent;
  let fixture: ComponentFixture<NewGoalComponent>;
  const goalsServiceStub: Partial<GoalsService> = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGoalComponent ],
      providers: [FormBuilder, { provide: GoalsService, useValue: goalsServiceStub
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
