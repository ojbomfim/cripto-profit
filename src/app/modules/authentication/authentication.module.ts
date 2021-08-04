import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
	declarations: [AuthenticationComponent, LoginComponent, SignupComponent],
	imports: [
		CommonModule,
		AuthenticationRoutingModule,
		SharedModule
	]
})
export class AuthenticationModule { }
