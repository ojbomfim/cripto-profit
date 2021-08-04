import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardApi } from '../../Api/dashboard/dashboardApi';

@Injectable({
	providedIn: 'root'
})
export class AverageService extends BaseService {

	constructor(private http: HttpClient) {
		super()
	}
	public averageInfo(): Observable<any> {
		return this.http.get(DashboardApi.averageInfo(), { headers: this.headers })
	}
}
