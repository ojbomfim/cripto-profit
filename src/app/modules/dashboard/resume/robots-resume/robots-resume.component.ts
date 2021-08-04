import { Component, OnInit, OnDestroy } from '@angular/core'
import { FundingService } from '../../../../core/http/services/funding/funding.service'
import { SubscriptionManager } from 'src/app/core/class/SubscriptionManager'

@Component({
	selector: 'app-robots-resume',
	templateUrl: './robots-resume.component.html',
	styleUrls: ['./robots-resume.component.styl']
})
export class RobotsResumeComponent implements OnInit, OnDestroy {
	private subscriptionManager: SubscriptionManager = new SubscriptionManager()
	public bots: any
	public loadingRobots = false
	constructor(
		private fundingService: FundingService
	) { }

	ngOnInit(): void {
		this.getfundingsRobots()
	}
	ngOnDestroy(): void {
		this.subscriptionManager.destroy()
	}

	getfundingsRobots() {
		this.loadingRobots = true
		this.subscriptionManager.add(
			this.fundingService.fundingStrategie().subscribe((res) => {
				this.bots = res
				this.loadingRobots = false
			}, (error) => {
				this.loadingRobots = false
				console.log(error)
			})
			, 'robots')
	}

}
