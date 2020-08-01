import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FeaturesComponent } from './components/features/features.component';
import { GoalsComponent } from './components/goals/goals.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { SingleGoalComponent } from './components/single-goal/single-goal.component';
import { GoalResolve } from './components/single-goal/goalResolve.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'pricing', component: PricingComponent },
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
