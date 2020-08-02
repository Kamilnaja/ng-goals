import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { GoalsComponent } from './components/goals/goals.component';
import { SingleGoalComponent } from './components/single-goal/single-goal.component';
import { GoalResolve } from './components/single-goal/goalResolve.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'goals', component: GoalsComponent },
  {
    path: 'goals/:id',
    component: SingleGoalComponent,
    resolve: { goal: GoalResolve }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
