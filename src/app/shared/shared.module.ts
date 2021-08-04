import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoadingComponent } from './components/loading/loading.component';
import { DatehoursPipe } from './pipes/datehours.pipe';
import { LoadingsComponent } from './components/loadings/loadings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BtnLoadingComponent } from './components/btn-loading/btn-loading.component';
import { MensagensErrosFormsDirective } from './directives/mensagens-erros-forms.directive';

@NgModule({
	declarations: [
		LoadingsComponent,
		LoadingComponent,
		DatehoursPipe,
		BtnLoadingComponent,
		MensagensErrosFormsDirective,

	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports: [
		LoadingsComponent,
		LoadingComponent,
		DatehoursPipe,
		FormsModule,
		ReactiveFormsModule,
		BtnLoadingComponent,
		MensagensErrosFormsDirective,

	]

})
export class SharedModule { }
