import { Injectable } from '@angular/core'
import { BaseService } from '../base.service'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { DashboardApi } from '../../Api/dashboard/dashboardApi'

@Injectable({
	providedIn: 'root'
})
export class ResultsService extends BaseService {

	constructor(private http: HttpClient) {
		super()
	}

	feeds(params) {
		this.setHeader()
		return this.http.get(DashboardApi.fees(params), { headers: this.headers })
	}

	results(): Observable<any> {
		this.setHeader()
		return this.http.get(DashboardApi.results(), { headers: this.headers })
	}
}
