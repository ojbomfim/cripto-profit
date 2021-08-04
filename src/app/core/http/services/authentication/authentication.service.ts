import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { AuthApi } from '../../Api/authentication/authApi';
@Injectable({
	providedIn: 'root'
})
export class AuthenticationService extends BaseService {

	constructor(private http: HttpClient) {
		super()
	}

	login(body: { login: string, password: string }) {
		this.setHeader()
		return this.http.post(AuthApi.Login(), body, { headers: this.headers })
	}
}
