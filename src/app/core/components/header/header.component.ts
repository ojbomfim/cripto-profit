import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

	constructor(private route: Router) { }
	public ismenuMobileActive = false
	ngOnInit(): void {
	}

	logout() {
		sessionStorage.clear()
		this.route.navigate(['/authentication/login'])
	}

	get name() {
		return JSON.parse(localStorage.getItem('user')).name
	}

	ActiveMenu() {
		return this.ismenuMobileActive = true
	}
	deactivateMenu(event) {
		console.log(event)
		return this.ismenuMobileActive = event
	}

}
