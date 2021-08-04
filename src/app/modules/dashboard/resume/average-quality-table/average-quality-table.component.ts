import { Component, OnInit, OnDestroy } from '@angular/core'
import { AverageService } from '../../../../core/http/services/dashboard/average.service'
import { SubscriptionManager } from '../../../../core/class/SubscriptionManager'

@Component({
	selector: 'app-average-quality-table',
	templateUrl: './average-quality-table.component.html',
	styleUrls: ['./average-quality-table.component.styl']
})
export class AverageQualityTableComponent implements OnInit, OnDestroy {
	private subscriptionManager: SubscriptionManager = new SubscriptionManager()
	public averages: Array<object>
	public actual_btc_price: string
	public loading = false
	constructor(private averageService: AverageService) {

	}

	ngOnInit(): void {
		this.getAverageInfo()
	}

	ngOnDestroy(): void {
		this.subscriptionManager.destroy()
	}

	getAverageInfo() {
		this.loading = true
		this.subscriptionManager.add(
			this.averageService.averageInfo().subscribe(
				(res: { actual_btc_price: string, list: Array<object> }) => {
					this.actual_btc_price = res.actual_btc_price
					this.averages = res.list
					this.loading = false
					this.subscriptionManager.removeByTag('averageInfo')
				}, (error) => {
					this.loading = false
					console.log(error)
					this.subscriptionManager.removeByTag('averageInfo')
				})
			, 'averageInfo')
	}

}
