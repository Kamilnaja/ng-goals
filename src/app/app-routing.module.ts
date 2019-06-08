import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FeaturesComponent } from './features/features.component';
import { GoalsComponent } from './goals/goals.component';
import { PricingComponent } from './pricing/pricing.component';
import { SingleGoalComponent } from './single-goal/single-goal.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'goals/:id', component: SingleGoalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
