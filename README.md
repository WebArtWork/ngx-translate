# client:// waw add ngx-translate
## import translate.module to core.module
```
import { TranslateModule } from 'src/app/modules/translate/translate.module';
@NgModule({
	exports: [ /* exports */
		TranslateModule
	]
})
```
## 2) create admin page 'translate'
 ```
 waw page admin translate
 ```
## 3)translate.component.html use tag "translatebox"
 ```<translatebox></translatebox> ```
 
## 4)Your_page_as_you_want_to_translat.component.html
  4.1)Use attribute "translate"
  4.2)First word to the dot its name for your page
  ```
  <span translate>carwash.Name </span>
  ```
## 5)On page 'Translate' write correctly translate
# Find waw-translate and and do it step by step
