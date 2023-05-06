import { Component } from '@angular/core';
import { TranslateService } from '../../translate.service';

@Component({
	templateUrl: './translates.component.html',
	styleUrls: ['./translates.component.scss']
})
export class TranslatesComponent {
	page: string = '';

	lang: string = this.ts.language ? this.ts.language.code : 'en';

	constructor(public ts: TranslateService) {}
}
