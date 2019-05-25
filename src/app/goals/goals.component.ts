import { Component, OnInit } from '@angular/core';
import { Goal } from 'interfaces/goal';
import { GoalsService } from './goals.service';

@Component({
  selector: 'go-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  public goals: Goal[];
  public newGoalVisible = false;

  constructor(private goalsService: GoalsService) { }

  ngOnInit() {
    this.goalsService.getGoals().subscribe(item => this.goals = item);
  }

  setGoalVisible(): void {
    this.newGoalVisible = true;
  }
}
