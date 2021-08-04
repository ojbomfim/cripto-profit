import { Component, OnInit, OnDestroy } from '@angular/core'
import { SubscriptionManager } from 'src/app/core/class/SubscriptionManager'
import { UserService } from '../../../core/http/services/user/user.service'
import { OrderService } from '../../../core/http/services/dashboard/order.service'
import { ChartsResquestService } from '../../../core/http/services/chartsRequest/charts-resquest.service'
import { ChartPieInterface } from '../../../core/interfaces/chartsInterface'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-resume',
	templateUrl: './resume.component.html',
	styleUrls: ['./resume.component.styl']
})
export class ResumeComponent implements OnInit, OnDestroy {
	private subscriptionManager: SubscriptionManager = new SubscriptionManager()
	public infosUser: any
	public orderInfos: any
	public loadings = [false, false, false, false]
	public chartPPP: ChartPieInterface = {}
	public chartInfoFreeUser: ChartPieInterface = {}
	public position: any
	public id: string
	constructor(
		private orderService: OrderService,
		private userService: UserService,
		private activatedRoute: ActivatedRoute,
		private chartsResquestService: ChartsResquestService
	) {
	}

	ngOnInit(): void {
		this.orderInfo()
		this.info()
		this.piechartPPP()
		this.pieChartInfoFreeUser()

	}

	ngOnDestroy(): void {
		this.subscriptionManager.destroy()
	}

	get client() {
		return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).name : 'Leonardo Setubal'
	}


	info() {
		this.loadings[0] = true
		this.subscriptionManager.add(
			this.userService.userInfo().subscribe((res) => {
				this.infosUser = res
				this.loadings[0] = false
				this.subscriptionManager.removeByTag('infoUser')
			}, (error) => {
				console.log(error)
				this.loadings[0] = false
				this.subscriptionManager.removeByTag('infoUser')
			}),
			'infoUser')
		return 'aqui'

	}

	orderInfo() {
		this.loadings[1] = true
		this.subscriptionManager.add(
			this.orderService.orderInfo().subscribe((res) => {
				this.orderInfos = res
				this.loadings[1] = false
				this.subscriptionManager.removeByTag('orderInfo')
			}, (error) => {
				console.log(error)
				this.loadings[1] = false
				this.subscriptionManager.removeByTag('orderInfo')
			}),
			'orderInfo')
	}


	pieChartInfoFreeUser() {
		this.loadings[3] = true
		this.subscriptionManager.add(
			this.chartsResquestService.chartInfoFreeUser().subscribe((res: Array<object>) => {
				this.chartInfoFreeUser.data = res
				this.loadings[3] = false
				this.subscriptionManager.removeByTag('pieChartInfoFreeUser')
			}, (error) => {
				this.loadings[3] = false
				this.subscriptionManager.removeByTag('pieChartInfoFreeUser')
				console.log(error)
			}), 'pieChartInfoFreeUser')
		this.chartInfoFreeUser.chartTitle = 'In Use x Free'
		this.chartInfoFreeUser.infosChart = {
			xname: 'name',
			yname: 'value',
			name: 'name'
		}
		this.chartInfoFreeUser.tooltipSettings = {
			enable: true,
			format: '${point.x}: <b>${point.y}</b>'
		}
		this.chartInfoFreeUser.radius = '50%'
		this.chartInfoFreeUser.chartLabel = {
			visible: true,
			position: 'Inside',
			name: 'text'
		}
	}

	piechartPPP() {
		this.loadings[2] = true
		this.subscriptionManager.add(
			this.chartsResquestService.chartPiePPP().subscribe((res: Array<object>) => {
				this.position = res.pop()
				this.chartPPP.data = res
				this.loadings[2] = false
				this.subscriptionManager.removeByTag('chartPPP')
			}, (error) => {
				this.loadings[2] = false
				this.subscriptionManager.removeByTag('chartPPP')
				console.log(error)
			}), 'chartPPP')
		this.chartPPP.chartTitle = 'Profit Free and Partial Position'
		this.chartPPP.infosChart = {
			xname: 'name',
			yname: 'value',
			name: 'name'
		}
		this.chartPPP.tooltipSettings = {
			enable: true,
			format: '${point.x}: <b>${point.y}</b>'
		}
		this.chartPPP.radius = '50%'
		this.chartPPP.chartLabel = {
			visible: true,
			position: 'Inside',
			name: 'text'
		}
	}
}
