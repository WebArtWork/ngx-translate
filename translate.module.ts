import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateDirective } from './translate.directive';
import { TranslateComponent } from './translate/translate.component';
import { WacomModule } from 'wacom';
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		WacomModule
	],
	declarations: [
  		TranslateDirective,
		TranslateComponent,
	],
	exports: [
		TranslateComponent,
		TranslateDirective
	],
	providers: []
})

export class TranslateModule { } 