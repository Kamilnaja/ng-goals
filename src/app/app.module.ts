import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { FeaturesComponent } from './components/features/features.component';
import { GoalsComponent } from './components/goals/goals.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { NewGoalComponent } from './components/new-goal/new-goal.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { SingleGoalComponent } from './components/single-goal/single-goal.component';
import { InfoStripComponent } from './components/info-strip/info-strip.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './components/login/login.service';
import { GoalsService } from './components/goals/goals.service';
import { GoalResolve } from './components/single-goal/goalResolve.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WrapperComponent,
    FooterComponent,
    HeaderMenuComponent,
    MainComponent,
    LoginComponent,
    FeaturesComponent,
    GoalsComponent,
    PricingComponent,
    NewGoalComponent,
    ConfirmationModalComponent,
    SingleGoalComponent,
    InfoStripComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule, HttpClientModule],
  providers: [LoginService, GoalsService, GoalResolve],
  bootstrap: [AppComponent]
})
export class AppModule {}
