import { Injectable } from '@angular/core'
import { BaseService } from '../base.service'
import { HttpClient } from '@angular/common/http'
import { UserApi } from '../../Api/user/user';

@Injectable({
	providedIn: 'root'
})
export class ChartsResquestService extends BaseService {

	constructor(private http: HttpClient) {
		super()
	}

	chartProftXbtc(params?: { date_interval }) {
		if (params.date_interval === 'Time') {
			params.date_interval = '12h'

		}
		this.setHeader()
		return this.http.get(UserApi.chartProftxBTC(this.paramsToURLSearch(params)), { headers: this.headers })
	}
	chartGainandLoses(params?: { date_interval }) {
		this.setHeader()
		if (params.date_interval === 'Time') {
			params.date_interval = '12h'
		}
		return this.http.get(UserApi.chartGainxLose(this.paramsToURLSearch(params)), { headers: this.headers })
	}
	chartPosition(params?: { date_interval }) {
		this.setHeader()
		if (params.date_interval === 'Time') {
			params.date_interval = '12h'

		}
		return this.http.get(UserApi.chartPositionXTime(this.paramsToURLSearch(params)), { headers: this.headers })
	}

	chartPiePPP() {
		this.setHeader()
		return this.http.get(UserApi.pieChartInfoPPP(), { headers: this.headers })
	}

	chartInfoFreeUser() {
		this.setHeader()
		return this.http.get(UserApi.piechartInfoFreeUser(), { headers: this.headers })
	}
}
