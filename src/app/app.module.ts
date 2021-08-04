import { BrowserModule } from '@angular/platform-browser'
import { NgModule, LOCALE_ID } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import localePtBr from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common'
import { DatehoursPipe } from './shared/pipes/datehours.pipe';
import { AuthedInterceptorModule } from './core/interceptors/authed.interceptor.module';

registerLocaleData(localePtBr)

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		AuthedInterceptorModule,

	],
	providers: [
		{
			provide: LOCALE_ID,
			useValue: 'pt-BR'
		},
		DatehoursPipe,
		AuthedInterceptorModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
