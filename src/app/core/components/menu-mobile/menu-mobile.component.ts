import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-menu-mobile',
	templateUrl: './menu-mobile.component.html',
	styleUrls: ['./menu-mobile.component.styl']
})
export class MenuMobileComponent implements OnInit {
	@Output() closeMenu = new EventEmitter<boolean>();
	constructor(private route: Router) { }

	ngOnInit(): void {
	}

	logout() {
		sessionStorage.clear()
		this.route.navigate(['/authentication/login'])
	}

	get name() {
		return JSON.parse(localStorage.getItem('user')).name
	}

	deactivateMenu() {
		this.closeMenu.emit(false)
	}
}
