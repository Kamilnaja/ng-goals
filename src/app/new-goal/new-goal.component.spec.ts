import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGoalComponent } from './new-goal.component';
import { FormBuilder } from '@angular/forms';
import { GoalsService } from '../goals/goals.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NewGoalComponent', () => {
  let component: NewGoalComponent;
  let fixture: ComponentFixture<NewGoalComponent>;
  const goalsServiceStub: Partial<GoalsService> = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGoalComponent ],
      providers: [FormBuilder, { provide: GoalsService, useValue: goalsServiceStub
      }],
      schemas: [NO_ERRORS_SCHEMA]
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
