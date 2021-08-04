import { NgModule, Injectable } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'
import { JwtHelperService } from '@auth0/angular-jwt'
import { Router } from '@angular/router'
import { tap } from 'rxjs/operators'

const helper = new JwtHelperService()


@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
	constructor(private router: Router) { }

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler,
	): Observable<HttpEvent<any>> {
		const user = localStorage.getItem('user')
		const token = sessionStorage.getItem('token')
		return next.handle(req).pipe(
			tap(
				event => {
					if (user && token) {
						this.verifyToken(token)
					} else {
						this.router.navigate(['/authentication/login'])
					}
				}
			)
		)
	}

	verifyToken(token) {
		if (helper.isTokenExpired(token)) {
			this.router.navigate(['/authentication/login'])
		}
	}
}

@NgModule({
	declarations: [],
	imports: [
		CommonModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpsRequestInterceptor,
			multi: true
		}
	]
})
export class AuthedInterceptorModule { }
