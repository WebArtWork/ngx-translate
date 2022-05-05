import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { TranslateDirective } from './translate.directive';
import { TranslateComponent } from './translate/translate.component';
@NgModule({
	imports: [
		CoreModule,
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