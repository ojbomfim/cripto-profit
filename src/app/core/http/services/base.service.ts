import { Injectable } from '@angular/core'
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'

@Injectable({
	providedIn: 'root'
})
export class BaseService {
	protected headers: HttpHeaders
	protected token = sessionStorage.getItem('token')
	protected sessionid = sessionStorage.getItem('sessionid')
	constructor() {
		this.headers = new HttpHeaders()
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Access-Control-Allow-Origin', '*')
			.set('sessionid', `${this.sessionid}`)
			.set('Authorization', this.token ? `Bearer ${this.token.trim()}` : '')
	}

	setHeader() {
		this.token = sessionStorage.getItem('token')
		this.headers = new HttpHeaders()
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Access-Control-Allow-Origin', '*')
			.set('sessionid', `${this.sessionid}`)
			.set('Authorization', this.token ? `Bearer ${this.token.trim()}` : '')
	}

	setHeaderFile() {
		this.token = sessionStorage.getItem('token')
		this.headers = new HttpHeaders()
			.set('Accept', 'application/json')
			.append('Accept', 'form-Data')
			.set('Authorization', this.token ? `Bearer ${this.token.trim()}` : '')
	}

	/***
	 * @method paramsToURLSearchused to return the parameters of a query.
	* Use if you have 1 or more requirements for search / filters
	 * Exemplo : Example: Search Activity
	 * @param values : receives an object.
	 * @returns Returns the parameterized parameter according to @param values ​​and turns it into a query.
	 * Example: {name: "Activity1"} returns name = Activity1
	 */
	paramsToURLSearch(values: any): string {
		const params = new URLSearchParams()
		for (const key in values) {
			if (values[key] !== '' && values[key] !== 'undefined' && values[key] != null) {
				params.set(key, values[key])
			}
		}
		return `?${params.toString()}`
	}
	/***
	 * @method OneparamToURLSearch It is used when one type of filter can be made at a time.
	 * Example: Search Activity
	 * @param tipo : Receives the filter type. Example: name, type, etc.
	 * @param query: Receive the search string. Example: Activity 1, ABCD
	 * @returns Returns the parameterized parameter. Example: name = Activity1
	 */
	OneparamToURLSearch(tipo?: string, query?: string) {
		const params = new URLSearchParams()
		if (query !== '' && query !== 'undefined' && query !== undefined && query !== null) {
			params.set(tipo, query)
		} else {
			// tslint:disable-next-line: no-unused-expression
			params.delete
		}
		return `?${params.toString()}`
	}


}
