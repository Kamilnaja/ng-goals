import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service.ts.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing.module';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService],
  imports: [ReactiveFormsModule, CommonModule, AuthRoutingModule]
})
export class AuthModule {}
