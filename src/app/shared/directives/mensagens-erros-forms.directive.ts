import { Directive, ElementRef, Input, OnInit } from '@angular/core'

@Directive({
	selector: '[appMensagensErrosForms]'
})
export class MensagensErrosFormsDirective implements OnInit {
	/**
	 * @param the FormControl
	 */
	@Input() control: any
	/**
	 * @param the message that will be on screen for required FormControl
	 */
	@Input() required = 'Campo obrigatório'
	/**
	 * @param the message that will be on screen for email FormControl
	 */
	@Input() email = 'Formato de e-mail inválido'
	/**
	 * @param the message that will be on screen for pattern of the FormControl
	 */
	@Input() pattern = 'Fora do padrão'
	/**
	 * @param the message that will be on screen for minLength of the FormControl
	 */
	@Input() minlength = 'Abaixo do tamanho mínimo'
	/**
	 * @param the message that will be on screen for maxLength of the FormControl
	 */
	@Input() maxlength = 'Acima do tamanho máximo'
	/**
	 * @param the message that will be on screen for max value of the FormControl
	 */
	@Input() max = 'Valor muito alto'
	/**
	 * @param the message that will be on screen for min value of the FormControl
	 */
	@Input() min = 'Valor muito baixo'
	/**
	 * @param the default message that will be on screen
	 */
	@Input() default = 'Algum erro no campo'

	constructor(
		private el: ElementRef
	) { }

	ngOnInit(): void {
		this.control.valueChanges.subscribe(() => {
			if (this.control.errors == null) {
				return this.el.nativeElement.innerText = ''
			}

			if (this.control.errors) {
				Object.keys(this.control.errors).forEach((error) => {
					switch (error) {
						case 'required':
							return this.el.nativeElement.innerText = this.required
						case 'email':
							return this.el.nativeElement.innerText = this.email
						case 'pattern':
							return this.el.nativeElement.innerText = this.pattern
						case 'minlength':
							return this.el.nativeElement.innerText = this.minlength
						case 'maxlength':
							return this.el.nativeElement.innerText = this.maxlength
						case 'max':
							return this.el.nativeElement.innerText = this.max
						case 'min':
							return this.el.nativeElement.innerText = this.min
						default:
							return this.el.nativeElement.innerText = this.default
					}
				})
			}
		})
	}
}
