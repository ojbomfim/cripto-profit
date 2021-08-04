import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'loading',
	templateUrl: './loading.component.html',
	styleUrls: ['./loading.component.styl']
})
export class LoadingComponent implements OnInit {
	@Input() loading
	constructor() { }

	ngOnInit(): void {
	}

}
