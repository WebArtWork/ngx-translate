import { Component } from '@angular/core';
import { HttpService, CoreService } from 'wacom';
import { TranslateService } from 'src/app/modules/translate/translate.service';
@Component({
	selector: 'translatebox',
	templateUrl: './translate.component.html',
	styleUrls: ['./translate.component.scss']
})
export class TranslateComponent {
	public page: string = '';
	public lang: string = this.ts.language ? this.ts.language.code : 'en';
	constructor(
		public http: HttpService,
		public core: CoreService,
		public ts: TranslateService
	) {}
}
