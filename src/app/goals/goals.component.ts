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
  public isModalVisible = false;

  constructor(private goalsService: GoalsService) { }

  ngOnInit() {
    this.goalsService.getGoals().subscribe(item => this.goals = item);
  }

  setGoalVisible(): void {
    this.newGoalVisible = true;
  }

  deleteGoal(index: number): void {
    this.isModalVisible = true;
    this.goalsService.deleteGoal(index);
  }

  modalClose() {
    this.isModalVisible = false;
  }
}
