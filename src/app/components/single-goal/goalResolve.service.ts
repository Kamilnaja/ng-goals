import { Injectable } from '@angular/core';
import { GoalsService } from '../goals/goals.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Goal } from '../goals/interfaces/goal';

@Injectable()
export class GoalResolve implements Resolve<Goal> {
  constructor(private goalsService: GoalsService) {}
  resolve(route: ActivatedRouteSnapshot) {
    return this.goalsService.getGoal(route.params['id']);
  }
}
