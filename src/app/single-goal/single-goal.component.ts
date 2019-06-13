import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../goals/goals.service';
import { Goal } from 'interfaces/goal';

@Component({
  selector: 'go-single-goal',
  templateUrl: './single-goal.component.html',
  styleUrls: ['./single-goal.component.scss']
})
export class SingleGoalComponent implements OnInit {
  public goal: Goal;
  constructor(private goalsService: GoalsService) { }

  ngOnInit() {
    const pathName = window.location.pathname;
    const goalId = pathName.slice(pathName.indexOf('=') + 1);
    this.goalsService.getGoal(goalId)
      .subscribe(item => this.goal = item);
  }
}
