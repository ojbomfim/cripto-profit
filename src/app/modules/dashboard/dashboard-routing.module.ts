import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'resume'
	},
	{
		path: '',
		component: DashboardComponent,
		children: [
			{
				path: 'resume',
				loadChildren: () => import('./resume/resume.module').then(
					r => r.ResumeModule
				)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }
