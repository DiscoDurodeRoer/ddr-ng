import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
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

  public getTranslate(key: string): string {
    const obj = this.data();
    return obj[key] ?? key;
  }

}