import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'btn-loading',
	templateUrl: './btn-loading.component.html',
	styleUrls: ['./btn-loading.component.styl']
})
export class BtnLoadingComponent implements OnInit {
	@Input() loading = false

	constructor() { }

	ngOnInit(): void {
	}

}
