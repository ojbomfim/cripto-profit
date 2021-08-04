import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubscriptionManager } from '../../../../core/class/SubscriptionManager';
import { ResultsService } from '../../../../core/http/services/dashboard/results.service';

@Component({
	selector: 'app-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.styl']
})
export class ResultsComponent implements OnInit, OnDestroy {
	public active = true
	public totals: object
	public today: object
	public loadingResults = false
	private subscriptionManager: SubscriptionManager = new SubscriptionManager()
	constructor(private resultsService: ResultsService) {

	}

	ngOnInit(): void {
		this.getResults()
	}

	ngOnDestroy(): void {
		this.subscriptionManager.destroy()
	}

	activeMenu() {
		this.active = !this.active
	}

	getResults() {
		this.loadingResults = true
		this.subscriptionManager.add(
			this.resultsService.results().subscribe((res: { total, today }) => {
				this.loadingResults = false
				this.totals = res.total
				this.today = res.today
				this.subscriptionManager.removeByTag('results')
			}, (error) => {
				console.log(error)
				this.subscriptionManager.removeByTag('results')
				this.loadingResults = false
			})
			, 'results')
	}

}
