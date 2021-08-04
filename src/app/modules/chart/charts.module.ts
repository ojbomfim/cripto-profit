import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
	ChartModule,
	LineSeriesService,
	CategoryService,
	LegendService,
	DataLabelService,
	AccumulationChartModule,
	PieSeriesService,
	AccumulationDataLabelService,
	AccumulationLegendService,
	AccumulationTooltipService
} from '@syncfusion/ej2-angular-charts'
import { FinancialChartComponent } from './financial-chart/financial-chart.component'
import { PizzaChartComponent } from '../chart/pizza-chart/pizza-chart.component'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
	declarations: [
		FinancialChartComponent,
		PizzaChartComponent,
	],
	imports: [
		CommonModule,
		ChartModule,
		AccumulationChartModule,
		SharedModule
	],
	exports: [
		FinancialChartComponent,
		PizzaChartComponent
	],
	providers: [
		LineSeriesService,
		CategoryService,
		LegendService,
		DataLabelService,
		PieSeriesService,
		AccumulationDataLabelService,
		AccumulationLegendService, AccumulationTooltipService
	]
})
export class ChartsModule { }
