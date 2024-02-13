import { Component } from '@angular/core';
import { Language, TranslateService } from '../../translate.service';
import { FormInterface } from 'src/app/modules/form/interfaces/form.interface';
import { FormService } from 'src/app/modules/form/form.service';
import { CoreService, HttpService } from 'wacom';
import { AlertService } from 'src/app/modules/alert/alert.service';

interface Translate {
	translate: string;
	slug: string;
	lang: string;
}

@Component({
	templateUrl: './translates.component.html',
	styleUrls: ['./translates.component.scss']
})
export class TranslatesComponent {
	columns = ['word', 'translation'];

	form: FormInterface = this._form.getForm('translate', {
		formId: 'translate',
		title: 'Translate',
		components: [
			{
				name: 'Text',
				key: 'translate',
				focused: true,
				fields: [
					{
						name: 'Placeholder',
						value: 'fill Translate'
					},
					{
						name: 'Label',
						value: 'Translate'
					}
				]
			}
		]
	});

	config = {
		buttons: [
			{
				icon: 'translate',
				click: (element: Translate) => {
					console.log(element);
				}
			}
		],
		update: (doc: Translate) => {
			this._form
				.modal<Translate>(this.form, [], {
					translate: this.ts.translate(doc.slug)
				})
				.then((updated: Translate) => {
					this._http.post('/api/translate/create', {
						slug: doc.slug,
						lang: this.ts.language.code,
						translate: updated.translate
					});
					this.ts.translates[this.ts.language.code][doc.slug] = updated.translate;
					this.ts.reset();
				});
		}
	};

	set_language(code: string) {
		this.ts.set_language(
			this.ts.languages.find((l) => l.code === code) as Language
		);
	}

	pages = [
		{
			name: this.ts.translate('Common.All'),
			_id: ''
		}
	].concat(
		this.ts.pages.map((p: string) => {
			return {
				name: p,
				_id: p
			};
		})
	);
	page = localStorage.getItem('page') || '';
	setPage(page: string) {
		this.page = page;
		localStorage.setItem('page', page);
	}

	get rows() {
		return this.ts.words.filter((w) => {
			return this.page ? this.page === w.slug.split('.')[0] : true;
		});
	}

	constructor(
		public ts: TranslateService,
		private _form: FormService,
		private _http: HttpService
	) {
		console.log(this.page);
	}
}
