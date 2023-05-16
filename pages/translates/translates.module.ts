import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatesComponent } from './translates.component';
import { WacomModule } from 'wacom';
import { TranslateModule } from '../../translate.module';
import { ButtonModule } from 'src/app/modules/button/button.module';

const routes: Routes = [
	{
		path: '',
		component: TranslatesComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		TranslateModule,
		CommonModule,
		ButtonModule,
		FormsModule,
		WacomModule
	],
	declarations: [TranslatesComponent],
	providers: []
})
export class TranslatesModule {}
