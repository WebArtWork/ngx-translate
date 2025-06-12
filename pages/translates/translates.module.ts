import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { WacomModule } from 'wacom';
import { TranslateModule } from '../../translate.module';
import { TranslatesComponent } from './translates.component';

import { SelectModule } from 'src/app/core/modules/select/select.module';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { ButtonComponent } from '../../../button/button.component';

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
    FormsModule,
    TableModule,
    WacomModule,
    SelectModule,
	ButtonComponent
],
	declarations: [TranslatesComponent],
	providers: []
})
export class TranslatesModule {}
