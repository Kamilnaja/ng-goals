import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsComponent } from './components/goals/goals.component';
import { SingleGoalComponent } from './components/single-goal/single-goal.component';
import { GoalResolve } from './components/single-goal/goalResolve.service';

const routes: Routes = [
  {
    path: '',
    component: GoalsComponent
  },
  { path: 'goals', component: GoalsComponent },
  {
    path: 'goals/:id',
    component: SingleGoalComponent,
    resolve: { goal: GoalResolve }
  },
  {
    path: 'login',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
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
