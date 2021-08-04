import { Component, OnInit } from '@angular/core'
import { SubscriptionManager } from '../../../../core/class/SubscriptionManager'
import { ChartsResquestService } from '../../../../core/http/services/chartsRequest/charts-resquest.service'
import { ChartLineInterface } from '../../../../core/interfaces/chartsInterface'
import { UserService } from '../../../../core/http/services/user/user.service'
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'
import { DatehoursPipe } from 'src/app/shared/pipes/datehours.pipe'
@Component({
	selector: 'app-profit',
	templateUrl: './profit.component.html',
	styleUrls: ['./profit.component.styl']
})
export class ProfitComponent implements OnInit {
	private subscriptionManager: SubscriptionManager = new SubscriptionManager()
	public proftxbtc: ChartLineInterface = {}
	public gainAndLoses: ChartLineInterface = {}
	public positionsChart: ChartLineInterface = {}
	public activeButton
	public loading = false
	public loadingicon = false
	public btcChanges: any
	public form: FormGroup
	public timers = [
		{ name: '12 Hours', value: '12h' },
		{ name: '4 Weeks', value: '4w' },
		{ name: '3 Months', value: '3M' },
	]
	public loadingProftXbtc: boolean
	public loadingGainAndLoses: boolean
	public loadingPositionChart: boolean
	constructor(
		private chartsResquestService: ChartsResquestService,
		private userService: UserService,
		private fb: FormBuilder,
		private datehoursPipe: DatehoursPipe
	) {
	}


	ngOnInit(): void {
		this.iniciarForm()
		this.getBtcChanges()
		this.getDataProftXBTC()
		this.getDataGainAndLoses()
		this.getPositionChart()

		this.setActive('proftxBTC')

	}

	iniciarForm() {
		this.form = this.fb.group({
			date_interval: new FormControl('Time')
		})
	}
	updatedTime() {
		this.getDataProftXBTC()
		this.getDataGainAndLoses()
		this.getPositionChart()
	}

	getBtcChanges() {
		this.loadingicon = true
		this.subscriptionManager.removeByTag('getBtcChanges')
		this.subscriptionManager.add(
			this.userService.btcChanges().subscribe((res) => {
				this.btcChanges = res
				this.loadingicon = false
				this.subscriptionManager.removeByTag('getBtcChanges')
			}, (error) => {
				console.log(error)
				this.loadingicon = false
				this.subscriptionManager.removeByTag('getBtcChanges')
			}), 'getBtcChanges')
	}

	format_date(res) {
		res.forEach(element => {
			if (this.form.controls.date_interval.value === 'Time' || this.form.controls.date_interval.value === '12h') {
				element.start_interval = this.datehoursPipe.transform(element.start_interval, 'hourShort')
				element.end_interval = this.datehoursPipe.transform(element.end_interval, 'hourShort')
				element = Object.assign(element, { time: element.start_interval.concat('-' + element.end_interval) })

			}
			if (this.form.controls.date_interval.value === '4w') {
				element.start_interval = this.datehoursPipe.transform(element.start_interval, 'dateShort')
				element.end_interval = this.datehoursPipe.transform(element.end_interval, 'dateShort')
				element = Object.assign(element, { time: element.start_interval })

			}
			if (this.form.controls.date_interval.value === '3M') {
				element.start_interval = this.datehoursPipe.transform(element.start_interval, 'dateShort')
				element.end_interval = this.datehoursPipe.transform(element.end_interval, 'dateShort')
				element = Object.assign(element, { time: element.start_interval })

			}
		})
		return res
	}

	getDataProftXBTC() {
		this.loadingProftXbtc = true
		this.subscriptionManager.add(
			this.chartsResquestService.chartProftXbtc(this.form?.value).subscribe((res: Array<object>) => {
				this.proftxbtc.data = this.format_date(res)
				this.subscriptionManager.removeByTag('proftxbtc')
				this.loadingProftXbtc = false
			}, (error) => {
				this.subscriptionManager.removeByTag('proftxbtc')
				console.log(error)
				this.loadingProftXbtc = false
			})
			, 'proftxbtc')
		this.proftxbtc.xAxis = {
			title: 'Time',
			valueType: 'Category'
		}
		this.proftxbtc.yAxis = {
			title: 'Percent',
			labelFormat: '{value}%'
		}
		this.proftxbtc.chartTitle = 'Profit x BTC '
		this.proftxbtc.infosChart = []
		this.proftxbtc.infosChart.push({
			xname: 'time',
			yname: 'BTC',
			name: 'BTC'
		})
		this.proftxbtc.infosChart.push({
			xname: 'time',
			yname: 'percentage_net_profit',
			name: 'PROFIT'
		})
	}

	getDataGainAndLoses() {
		this.loadingGainAndLoses = true
		this.subscriptionManager.add(
			this.chartsResquestService.chartGainandLoses(this.form?.value).subscribe((res: Array<object>) => {
				this.gainAndLoses.data = this.format_date(res)
				this.subscriptionManager.removeByTag('chartGainandLoses')
				this.loadingGainAndLoses = false
			}, (error) => {
				this.subscriptionManager.removeByTag('chartGainandLoses')
				this.loadingGainAndLoses = false
				console.log(error)
			})
			, 'chartGainandLoses')
		this.gainAndLoses.xAxis = {
			title: 'Time',
			valueType: 'Category'
		}
		this.gainAndLoses.yAxis = {
			title: 'Gains',
			labelFormat: '$ {value}'
		}
		this.gainAndLoses.chartTitle = 'Gains'
		this.gainAndLoses.infosChart = []
		this.gainAndLoses.infosChart.push({
			xname: 'time',
			yname: 'net_profit',
			name: 'Gain'
		})
		this.gainAndLoses.infosChart.push({
			xname: 'time',
			yname: 'accumulated_net_profit',
			name: 'Accumulated Gains'
		})
	}

	getPositionChart() {
		this.loadingPositionChart = true
		this.subscriptionManager.add(
			this.chartsResquestService.chartPosition(this.form?.value).subscribe((res: Array<object>) => {
				this.positionsChart.data = this.format_date(res)
				this.subscriptionManager.removeByTag('chartPosition')
				this.loadingPositionChart = false
			}, (error) => {
				this.subscriptionManager.removeByTag('chartPosition')
				this.loadingPositionChart = false
				console.log(error)
			})
			, 'chartPosition')
		this.positionsChart.xAxis = {
			title: 'Time',
			valueType: 'Category'
		}
		this.positionsChart.yAxis = {
			title: 'Position',
			labelFormat: '$ {value}'
		}
		this.positionsChart.chartTitle = 'Positions'
		this.positionsChart.infosChart = []
		this.positionsChart.infosChart.push({
			xname: 'time',
			yname: 'position',
			name: 'Position'
		})
	}

	setActive(buttonName) {
		this.activeButton = buttonName
	}

	isActive(buttonName) {
		return this.activeButton === buttonName
	}

}
