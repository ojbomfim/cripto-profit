export interface ChartLineInterface {
	data?: any,
	xAxis?: { title: string; valueType: string; labelFormat?: string },
	yAxis?: { title: string, labelFormat?: string },
	chartTitle?: string,
	infosChart?: Array<InfosChartInterface>
}

export interface ChartPieInterface {
	data?: any,
	chartTitle?: string,
	radius?: string,
	chartLabel?: {
		visible: boolean,
		position: string,
		name?: string,
		format?: string
	},
	tooltipSettings?: {
		enable: boolean,
		format?: string,
		name?: string
	},
	infosChart?: InfosChartInterface
}

interface InfosChartInterface {
	yname?: string,
	xname?: string,
	name?: string
}

