import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({ 
  providedIn: 'root',
})
export class DdrTranslateService {

  private http: HttpClient = inject(HttpClient);

  private data: any = {} as any;;

  /**
   * Obtengo las traducciones, depende del lenguaje del navegador
   */
  public getData(path: string, language?: string) {
    return new Promise((resolve, reject) => {

      if (!language) {
        language = navigator.language.toLowerCase();
      }

      this.http.get(path + language + '.json').subscribe({
        next: (data: any) => {
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

  /**
   * Obtengo una traduccion en concreto
   */
  public getTranslate(key: string): string {
    return this.data[key] ? this.data[key] : key;
  }

  public addTranslate(key: string, value: string) {
    this.data[key] = value;
  }

  public removeTranslate(key: string) {
    delete this.data[key];
  }

  public removeAllTranslates() {
    this.data = {};
  }

}