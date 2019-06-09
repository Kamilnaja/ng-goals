import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { GoalsComponent } from './goals.component';
import { NewGoalComponent } from '../new-goal/new-goal.component';
import { GoalsService } from './goals.service';
import { Goal } from 'interfaces/goal';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('GoalsComponent', () => {
  let component: GoalsComponent;
  let fixture: ComponentFixture<GoalsComponent>;

  beforeEach(async(() => {
    let goalsServiceStub: Partial<GoalsService>;
    goalsServiceStub = {};
    const goal1: Goal = {
      description: 'hi',
      id: 1
    };

    const goalsList = [];
    goalsList.push(goal1);
    goalsServiceStub.getGoals = function () {
      return of(goalsList);
    };

    TestBed.configureTestingModule({
      declarations: [GoalsComponent, NewGoalComponent],
      providers: [{
        provide: GoalsService, useValue: goalsServiceStub
      }],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display list of goals', () => {
    expect(fixture.nativeElement.querySelectorAll('.goals-list li').length).toBe(1);
  });

  it('should show modal after click delete', fakeAsync(() => {
    spyOn(component, 'deleteGoal');
    const deleteBtn = fixture.debugElement.query(By.css('.delete-btn'));
    deleteBtn.triggerEventHandler('click', 1);
    tick();
    fixture.detectChanges();
    expect(component.deleteGoal).toHaveBeenCalled();
    const modal = fixture.debugElement.query(By.css('.confirmation-modal'));
    expect(modal).toBeDefined();
  }));
});

