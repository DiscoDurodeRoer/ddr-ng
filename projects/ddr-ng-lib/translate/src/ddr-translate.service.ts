import { HttpClient } from '@angular/common/http';
import { DOCUMENT, inject, Service, Signal, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { DDR_TRANSLATE_CONFIG } from './ddr-translate.constants';

@Service()
export class DdrTranslateService {

  private readonly document = inject(DOCUMENT);
  private readonly http = inject(HttpClient);
  private readonly config = inject(DDR_TRANSLATE_CONFIG);

  private data = signal<{ [key: string]: string }>({});
  private language = signal<string | null>(null);
  private path = signal<string | null>(null);

  public currentLanguage: Signal<string | null> = this.language.asReadonly();
  public availableLanguages: Signal<string[]> = signal<string[]>(this.config.availableLanguages || []);

  public async getData(path: string, language?: string): Promise<boolean> {
    try {
      if (!language) {
        language = navigator.language.toLowerCase();
      }
      this.path.set(path);

      return this.changeLanguage(language);

    } catch (error) {
      console.error('Error to get translations: ' + error);
      return false;
    }
  }

  public async changeLanguage(language: string) {
    this.language.set(language);
    const response = await firstValueFrom(this.http.get(`${this.path()}${this.language()}.json`));
    if (!response) return false;
    this.data.set(response as any);
    this.document.documentElement.lang = language;
    return true;
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