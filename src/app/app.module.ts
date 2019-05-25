import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { FeaturesComponent } from './features/features.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { GoalsComponent } from './goals/goals.component';
import { GoalsService } from './goals/goals.service';
import { PricingComponent } from './pricing/pricing.component';
import { NewGoalComponent } from './new-goal/new-goal.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService, GoalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
