import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService } from '../../../core/http/services/authentication/authentication.service'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { SubscriptionManager } from 'src/app/core/class/SubscriptionManager'
import { JwtHelperService } from '@auth0/angular-jwt'

const helper = new JwtHelperService()

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
	public loginForm: FormGroup
	public loadingButton = false
	public rememberme = new FormControl(false)
	private subscriptionManager: SubscriptionManager = new SubscriptionManager()

	constructor(
		private route: Router,
		private authenticationService: AuthenticationService,
	) {
	}

	ngOnInit(): void {
		this.initForm()
		this.getRememberme()

	}

	initForm() {
		this.loginForm = new FormGroup({
			user_name: new FormControl('', [Validators.required]),
			password: new FormControl('', [Validators.required]),
		})
	}

	setRememberme() {
		if (this.rememberme.value) {
			localStorage.setItem('login', JSON.stringify(this.loginForm.value))
			localStorage.setItem('rememberme', JSON.stringify(this.rememberme.value))
		}
		if (!this.rememberme.value) {
			localStorage.removeItem('login')
			localStorage.setItem('rememberme', JSON.stringify(this.rememberme.value))
		}
	}

	getRememberme() {
		this.rememberme.setValue(JSON.parse(localStorage.getItem('rememberme')))
		if (this.rememberme.value) {
			const { user_name, password } = JSON.parse(localStorage.getItem('login'))
			this.loginForm.setValue({ user_name, password })
		}
	}

	login() {
		this.loadingButton = true
		this.subscriptionManager.add(
			this.authenticationService.login(this.loginForm.value).subscribe((res: { accessToken, sessionid }) => {
				const decodedToken = helper.decodeToken(res.accessToken)
				this.saveSessionStorage(decodedToken, res.accessToken, res.sessionid)
				this.signin()
				this.loadingButton = false
				this.subscriptionManager.removeByTag('login')
			}, (error) => {
				console.log(error)
				this.loadingButton = false
				this.subscriptionManager.removeByTag('login')
			}), 'login'
		)
	}

	saveSessionStorage(decodedToken: any, token: string, sessionid: string) {
		localStorage.setItem('user', JSON.stringify(decodedToken))
		sessionStorage.setItem('token', token)
		sessionStorage.setItem('sessionid', sessionid)

	}

	signup() {
		this.route.navigate(['/authentication/singup'])
	}

	signin() {
		this.route.navigate(['/dashboard/resume'])
	}

}
