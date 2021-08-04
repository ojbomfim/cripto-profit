import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from '../../core/components/header/header.component';
import { MenuComponent } from '../../core/components/menu/menu.component';
import { SharedModule } from '../../shared/shared.module';
import { MenuMobileComponent } from '../../core/components/menu-mobile/menu-mobile.component';

@NgModule({
	declarations: [
		DashboardComponent,
		HeaderComponent,
		MenuMobileComponent,
		MenuComponent],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		SharedModule,
	],
	exports: [
		MenuMobileComponent,
	]
})
export class DashboardModule { }
