import { Injectable } from '@angular/core'
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { JwtHelperService } from '@auth0/angular-jwt'

const helper = new JwtHelperService()

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
	constructor(private router: Router) { }

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.verifyAccess()
	}

	canLoad(
		route: Route,
		segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
		return this.verifyAccess()
	}
	private verifyAccess() {
		const token = sessionStorage.getItem('token')
		if (token && !helper.isTokenExpired(token)) { return true }
		this.router.navigate(['/authentication/login'])
		return false
	}
}
