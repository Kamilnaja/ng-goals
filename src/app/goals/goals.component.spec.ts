import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsComponent } from './goals.component';
import { NewGoalComponent } from '../new-goal/new-goal.component';
import { GoalsService } from './goals.service';
import { Goal } from 'interfaces/goal';
import { of } from 'rxjs';

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
      }]
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
});
