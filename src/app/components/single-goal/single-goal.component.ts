import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../goals/goals.service';
import { ActivatedRoute } from '@angular/router';
import { Goal } from '../goals/interfaces/goal';

@Component({
  selector: 'go-single-goal',
  templateUrl: './single-goal.component.html',
  styleUrls: ['./single-goal.component.scss']
})
export class SingleGoalComponent implements OnInit {
  public goal: Goal;
  constructor(private goalsService: GoalsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.goal = this.route.snapshot.data['goal'];
  }
}
