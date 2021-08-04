import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'pizza-chart',
	templateUrl: './pizza-chart.component.html',
	styleUrls: ['./pizza-chart.component.styl']
})
export class PizzaChartComponent implements OnInit {
	@Input() data
	@Input() chartLabel
	@Input() radius
	@Input() tooltipSettings
	@Input() chartTitle
	@Input() infosChart
	public legend: object
	constructor() {
		this.legend = {
			visible: true,
			padding: 10,
			shapePadding: 10,
			position: 'Bottom',
			width: '150'
		}
	}

	ngOnInit(): void {
	}

}
