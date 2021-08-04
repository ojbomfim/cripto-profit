import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core'
@Component({
	selector: 'financial-chart',
	templateUrl: './financial-chart.component.html',
	styleUrls: ['./financial-chart.component.styl']
})
export class FinancialChartComponent implements OnInit, OnChanges {

	@Input() chartTitle: string
	@Input() xAxis: object
	@Input() yAxis: object
	@Input() data: Array<object>
	@Input() infosChart: Array<object>
	@Input() loadingChart: boolean
	public grafico: any
	public legend: object
	public markerSettings: object
	public tooltipSetting: object
	constructor() {
	}

	ngOnInit(): void {
		this.chartSyncusConfig()
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log(changes.loading)
	}

	chartSyncusConfig() {
		this.legend = {
			visible: true,
			padding: 10,
			paddingShape: 10
		}
		this.tooltipSetting = {
			enable: true
		}
		this.markerSettings = {
			visible: true,
			dataLabel: {
				visible: true
			}
		}
	}

}
