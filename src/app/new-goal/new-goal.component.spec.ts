import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGoalComponent } from './new-goal.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
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
      imports: [
        ReactiveFormsModule
      ],
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

  it('should be invalid, when empty', () => {
    const description = component.goalForm.get('description');
    expect(description.valid).toBeFalsy();
    expect(description.errors.required).toBeTruthy();
    console.log(component.goalForm.get('description').errors);
  });

  it('should be truthy, when not empty', () => {
    const description = component.goalForm.get('description');
    description.setValue('lorem');
    expect(description.valid).toBeTruthy();
  });

});
