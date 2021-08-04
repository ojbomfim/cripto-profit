import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardApi } from '../../Api/dashboard/dashboardApi';

@Injectable({
	providedIn: 'root'
})
export class OrderService extends BaseService {
	constructor(private http: HttpClient) {
		super()
	}

	orderInfo(): Observable<any> {
		this.setHeader()
		return this.http.get(DashboardApi.orderInfo(), { headers: this.headers })
	}
}
