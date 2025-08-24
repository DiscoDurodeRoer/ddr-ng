import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DdrTranslateService {

  private http: HttpClient = inject(HttpClient);

  private data: any = {} as any;

  public getData(path: string, language?: string) {
    return new Promise((resolve, reject) => {

      if (!language) {
        language = navigator.language.toLowerCase();
      }

      this.http.get(path + language + '.json').subscribe({
        next: (data: any) => {
          this.removeAllTranslates();
          for (const key of Object.keys(data)) {
            this.addTranslate(key, data[key]);
          }
          resolve(true);
        }, error: (error) => {
          console.error('Error to get translations: ' + error);
          resolve(false);
        }
      });
    });
  }

  public getTranslate(key: string): string {
    return this.data[key] ? this.data[key] : key;
  }

  private addTranslate(key: string, value: string) {
    this.data[key] = value;
  }

  private removeAllTranslates() {
    this.data = {};
  }

}