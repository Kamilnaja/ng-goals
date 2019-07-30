import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../goals/goals.service';
import { Goal } from 'interfaces/goal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'go-single-goal',
  templateUrl: './single-goal.component.html',
  styleUrls: [ './single-goal.component.scss' ]
})
export class SingleGoalComponent implements OnInit {
  public goal: Goal;
  constructor(
    private goalsService: GoalsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.goal = this.route.snapshot.data['goal'];
  }
}
