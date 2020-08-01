import { Component, OnInit, OnDestroy } from '@angular/core';
import { Goal } from 'interfaces/goal';
import { GoalsService } from './goals.service';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'go-goals',
  templateUrl: './goals.component.html',
  styleUrls: [ './goals.component.scss' ]
})

export class GoalsComponent implements OnInit, OnDestroy {

  public goals: Goal[];
  public newGoalVisible = false;
  public isModalVisible = false;
  public selectedItem: number;
  public destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private goalsService: GoalsService, private location: Location) {
  }

  ngOnInit() {
    this.goalsService.getGoals()
      .pipe(takeUntil(this.destroy$))
      .subscribe(item => this.goals = item);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  setGoalVisible(): void {
    this.newGoalVisible = true;
  }

  deleteGoal(index: number): void {
    this.isModalVisible = true;
    this.selectedItem = index;
  }

  modalClose(val: boolean) {
    this.isModalVisible = false;
    if (val) {
      this.doDelete();
    }
  }

  private doDelete() {
    this.goalsService
      .deleteGoal(this.selectedItem)
      .subscribe(() => this.refresh());
  }

  public handleRefresh() {
    this.refresh();
  }

  public refresh() {
    return this.goalsService
      .getGoals().subscribe((data: Goal[]) => this.goals = data);
  }
}
