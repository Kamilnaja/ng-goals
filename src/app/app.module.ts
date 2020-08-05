import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './components/auth/auth.module';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { GoalsComponent } from './components/goals/goals.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoStripComponent } from './components/info-strip/info-strip.component';
import { MainComponent } from './components/main/main.component';
import { NewGoalComponent } from './components/new-goal/new-goal.component';
import { GoalResolve } from './components/single-goal/goalResolve.service';
import { SingleGoalComponent } from './components/single-goal/single-goal.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { ErrorInterceptor } from './shared/interceptor/error.interceptor';
import { GoalsService } from './components/goals/goals.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WrapperComponent,
    FooterComponent,
    HeaderMenuComponent,
    MainComponent,
    GoalsComponent,
    NewGoalComponent,
    ConfirmationModalComponent,
    SingleGoalComponent,
    InfoStripComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule, HttpClientModule, AuthModule],
  providers: [
    GoalResolve,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    GoalsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
