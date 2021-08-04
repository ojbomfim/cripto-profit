import { Injectable } from '@angular/core'
import { BaseService } from '../base.service'
import { HttpClient } from '@angular/common/http'
import { Funding } from '../../Api/funding/funding';

@Injectable({
	providedIn: 'root'
})
export class FundingService extends BaseService {

	constructor(private http: HttpClient) {
		super()
	}

	fundingStrategie() {
		this.setHeader()
		return this.http.get(Funding.fundingStrategie(), { headers: this.headers })
	}
}
