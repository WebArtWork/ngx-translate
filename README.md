# client:// waw add ngx-translate
##1) create admin page 'translate'
 ```
 waw page admin translate
 ```
 ##2) import module to this page
  ```
  import { TranslateModule } from 'src/app/modules/translate/translate.module'
  @NgModule({
    imports: [
      TranslateModule
    ],
  })
  ```
##3) translate.component.html use tag "translatebox"
 ```<translatebox></translatebox> ```

##4) #Your_page_as_you_want_to_translate.module.ts
 ```
import { TranslateModule } from 'src/app/modules/translate/translate.module';
@NgModule({
	imports: [
  TranslateModule	
],
```
##5) #Your_page_as_you_want_to_translat.component.html
  5.1)Use attribute "translate"
  5.2)First word to the dot its name for your page
  ```
  <span translate>carwash.Name </span>
  ```
##6)On page 'Translate' write correctly translate
