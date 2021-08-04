import { Pipe, PipeTransform } from '@angular/core'
import { utcToZonedTime } from 'date-fns-tz'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
@Pipe({
	name: 'datehours'
})
export class DatehoursPipe implements PipeTransform {

	formatos = {
		dateShort() {
			return 'dd/MM/yy'
		},
		completeData() {
			return 'dd MMMM yyyy'
		},
		hourShort() {
			return 'HH:mm'
		},
		completeHour() {
			return 'HH:mm:ss'
		},
		datehourComplete() {
			return 'dd \'de\' MMMM \'de\' yyyy HH:mm:ss'
		},
		dateHourShort() {
			return 'dd\/MM\/yy HH:mm'
		},
		fullWeekDay() {
			return 'dddd'
		},
		weekDayShort() {
			return 'ddd'
		},
		fullMonth() {
			return 'MMMM'
		},
		shortMonth() {
			return 'MMM'
		},
		dateAverage() {
			return 'dd MMM yyyy'
		},
		dateMediaWithTime() {
			return 'dd MMM yyyy HH:mm:ss'
		},
		default(pattern) {
			return pattern
		}
	}
	transform(value: any, ...args: any[]): any {
		const formatFunction = this.formatos[args[0]]
		if (!value) {
			return 'No Date'
		}
		const pattern = args[1]
		return format(utcToZonedTime(value, 'America/Araguaina'), formatFunction(pattern), { locale: ptBR })
	}

	/**
	* Date TimeZone Pipe Doc
	* {{suaData | datehours: 'dateShort' }} ---> 10/2/19
	* {{suaData | datehours: 'completeData' }} ---> 10 Fevereiro 2019
	* {{suaData | datehours: 'hourShort' }} ---> 18:45
	* {{suaData | datehours: 'horaCompleta' }} ---> 18:45:34
	* {{suaData | datehours: 'datehourComplete' }} ---> 10 de Fevereiro de 2019 18:45:34
	* {{suaData | datehours: 'dateHourShort' }} ---> 10/02/19 18:45
	* {{suaData | datehours: 'fullWeekDay' }} ---> Segunda-Feira
	* {{suaData | datehours: 'weekDayShort' }} ---> Seg
	* {{suaData | datehours: 'fullMonth' }} ---> Fevereiro
	* {{suaData | datehours: 'shortMonth' }} ---> Fev
	* {{suaData | datehours: 'dateAverage' }} ---> 10 Fev 2019
	* {{suaData | datehours: 'dateMediaWithTime' }} ---> 10 Fev 2019 18:45:34
	* {{suaData | datehours: 'default' : 'SUA EXPRESSÃO' }} ---> Formato como você deseja
	*/
}
