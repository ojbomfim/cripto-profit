import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environments/environment'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
	title = 'Mr. PROFT'
	public contLogVersao = 0

	constructor() { }

	ngOnInit(): void {
		this.mostrarVersao()
	}

	mostrarVersao() {
		if (this.contLogVersao === 0) {
			this.contLogVersao++

			const versao = environment ? environment.VERSION_APP : '0.0.0'
			const aplicacao = 'Mr. Profit'
			const api = environment.API
			const ambiente = environment.production
				? 'Produção'
				: 'Homologação'

			console.log(
				`%c${api}`,
				'color: hsl(55, 100%, 50%); font-size: 30px'
			)
			console.log(
				`%c${aplicacao}`,
				'color: hsl(55, 100%, 50%); font-size: 20px'
			)
			console.log(
				`%cVersão: ${versao} - ${ambiente}`,
				'color: hsl(55, 100%, 50%); font-size: 15px'
			)
		}


	}
}
