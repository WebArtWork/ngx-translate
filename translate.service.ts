import { Injectable, Inject, Optional } from '@angular/core';
import { HttpService } from 'wacom';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  public storage_translates: any = localStorage.getItem('translates');
  public language = 'ua';
  public languages: any = ['ua'];
  public translates: any = localStorage.getItem('translates') && JSON.parse(this.storage_translates) || {};
  constructor(private http: HttpService) {
    this.http.get('/api/translate/get_translates', obj => {
      this.translates = obj;
      console.log(obj);
      localStorage.setItem('translates', JSON.stringify(this.translates));
    })
  }
  private resets: any = {};
  reset() {
    for (let slug in this.resets) {
      if (Array.isArray(this.resets[slug])) {
        for (let i = 0; i < this.resets[slug].length; i++) {
          if (this.translates[this.language] && this.translates[this.language][slug]) {
            this.resets[slug][i](this.translates[this.language][slug]);
          } else {
            this.resets[slug][i](slug.substr(slug.indexOf('.') + 1));
          }
        }
      }
    }
  };
  translate(slug, reset) {
    if (!slug) return '';
    if (!this.resets[slug]) this.resets[slug] = [];
    this.resets[slug].push(reset);
    if (this.translates[this.language] && this.translates[this.language][slug]) {
      return this.translates[this.language][slug];
    } else {
      this.http.post('/api/word/create', {
        slug: slug,
        word: slug.substr(slug.indexOf('.') + 1),
        page: slug.split('.')[0]
      }, resp => { });
      return slug.substr(slug.indexOf('.') + 1);
    }
  }

  download_json() {
    this.http.get('/api/translate/get_translates', (obj) => {
      let dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.translates));
      let link = document.createElement('a');
      link.href = dataStr;
      link.download = 'translate.json';
      link.click();
      link.remove();
    })
  }
  set_language(language: any) {
    this.language = language;
  }
}