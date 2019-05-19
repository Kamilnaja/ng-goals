import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'features', component: FeaturesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
