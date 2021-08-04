import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core'

@Component({
	selector: 'loadings',
	templateUrl: './loadings.component.html',
	styleUrls: ['./loadings.component.styl']
})
export class LoadingsComponent implements OnInit, OnChanges {

	constructor() { }
	@Input() loadings = []
	@Input() text: boolean = true
	public loading: boolean
	ngOnInit(): void {
	}

	ngOnChanges(change: SimpleChanges): void {
		if (change.loadings) {
			this.isLoading()
		}
	}

	isLoading() {
		this.loading = this.loadings.find(fact => {
			if (fact) {
				return true
			}
			else {
				return false
			}
		})
	}

}
