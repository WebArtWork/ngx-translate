import { Component } from '@angular/core';
import { TranslateService } from '../../translate.service';
import { FormInterface } from 'src/app/modules/form/interfaces/form.interface';
import { FormService } from 'src/app/modules/form/form.service';
import { AlertService, CoreService } from 'wacom';

interface User {

}

@Component({
	templateUrl: './translates.component.html',
	styleUrls: ['./translates.component.scss']
})
export class TranslatesComponent {
	columns = ['word', 'translation'];

	form: FormInterface = this._form.getForm('user');

	config = {
		buttons: [
			{
				icon: 'translate',
				click: (element: User) => {
					console.log(element);

				}
			}
		],
		update: (doc: User) => {
			this._form.modal<User>(this.form, [], doc).then((updated: User) => {
				this._core.copy(updated, doc);

				// this.ts.save(doc);
			});
		},
		delete: (user: User) => {
			this._alert.question({
				text: this.ts.translate(
					'Users.Are you sure you want to delete this user?'
				),
				buttons: [
					{
						text: this.ts.translate('Common.No')
					},
					{
						text: this.ts.translate('Common.Yes'),
						callback: () => {
							// this.ts.delete(user);
						}
					}
				]
			});
		}
	};



	page = '';

	lang: string = this.ts.language ? this.ts.language.code : 'en';

	constructor(
		public ts: TranslateService,
		private _alert: AlertService,
		private _core: CoreService,
		private _form: FormService
	) {}
}
