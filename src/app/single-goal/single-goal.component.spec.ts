import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleGoalComponent } from './single-goal.component';
import { GoalsService } from '../goals/goals.service';
import { Goal } from 'interfaces/goal';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('SingleGoalComponent', () => {
  let component: SingleGoalComponent;
  let fixture: ComponentFixture<SingleGoalComponent>;
  const testGoal: Goal = {
    _id: '1233',
    description: 'lorem',
    id: 1,
    title: 'lorem ipsum'
  };

  beforeEach(async(() => {
    const goalsServiceStub: Partial<GoalsService> = {};
    goalsServiceStub.getGoal = function () {
      return of(testGoal);
    };

    TestBed.configureTestingModule({
      declarations: [ SingleGoalComponent ],
      providers: [{provide: GoalsService, useValue: goalsServiceStub}]
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

  it('should read task from server', () => {
    expect(fixture.debugElement.query(By.css('.goal-id'))).toBeDefined();
  });
});
