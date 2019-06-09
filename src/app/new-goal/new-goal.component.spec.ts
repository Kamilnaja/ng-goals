import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGoalComponent } from './new-goal.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { GoalsService } from '../goals/goals.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

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

  it('should not show error info, when app starts', () => {
    const infoStrip = fixture.debugElement.query(By.css('go-info-strip'));
    expect(infoStrip).toBeNull();
  });

  it('should show error info, when click in submit button and form is empty', () => {
    expect(component.showInfo).toEqual(false);
    const description = component.goalForm.get('description');
    description.setValue('lorem');
    fixture.detectChanges();
    expect(component.showInfo).toEqual(false);

    description.setValue('');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    expect(component.showInfo).toEqual(true);

    const infoStrip = fixture.debugElement.query(By.css('go-info-strip'));
    expect(infoStrip).toBeDefined();
  });
});
