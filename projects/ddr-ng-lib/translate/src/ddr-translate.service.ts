import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';

@Service()
export class DdrTranslateService {

  private http = inject(HttpClient);
  private data = signal<{ [key: string]: string }>({});

  public async getData(path: string, language?: string): Promise<boolean> {
    try {
      if (!language) {
        language = navigator.language.toLowerCase();
      }

      const response = await this.http.get(path + language + '.json').toPromise();
      if (!response) return false;

      this.data.set(response as any);

      return true;

    } catch (error) {
      console.error('Error to get translations: ' + error);
      return false;
    }
  }

  public getTranslate(key: string, params?: any): string {

    if (!params) return this.data()[key] ?? key;

    let translate = this.data()[key] ?? key;

    for (const keyParam of Object.keys(params)) {
      translate = translate.replaceAll('{' + keyParam + '}', params[keyParam])
    }

    return translate;
  }

}