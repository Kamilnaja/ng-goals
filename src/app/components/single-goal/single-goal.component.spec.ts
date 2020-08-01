import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleGoalComponent } from './single-goal.component';
import { GoalsService } from '../goals/goals.service';
import { Goal } from 'interfaces/goal';
import { of, Observable, from } from 'rxjs';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Data } from '@angular/router';

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
      providers: [
        { provide: GoalsService, useValue: goalsServiceStub },
        {
          provide: ActivatedRoute, useValue: {
            snapshot: {
              params: {
                'goal': '123'
              },
              data: {
                goal: {'id': 1}
              }
            }
          }
        } ]
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
    expect(fixture.debugElement.query(By.css('.goal-id')).nativeElement.innerHTML.trim()).toEqual('1');
  });
});
