import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserApi } from '../../Api/user/user';

@Injectable({
	providedIn: 'root'
})
export class UserService extends BaseService {

	constructor(private http: HttpClient) {
		super()
	}

	userInfo(): Observable<any> {
		this.setHeader()
		return this.http.get(UserApi.getUserInfo(), { headers: this.headers })
	}

	btcChanges(): Observable<any> {
		this.setHeader()
		return this.http.get(UserApi.btcChanges(), { headers: this.headers })
	}

}
