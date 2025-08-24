import { inject, Pipe, PipeTransform } from '@angular/core';
import { DdrTranslateService } from '../services/ddr-translate.service';

@Pipe({
  name: 'ddrTranslate',
  pure: false
})
export class DdrTranslatePipe implements PipeTransform {

  private translateService: DdrTranslateService = inject(DdrTranslateService);

  transform(value: any, params?: any): any {
    if (!params) {
      return this.translateService.getTranslate(value);
    }

    let translate = this.translateService.getTranslate(value);

    for (const keyParam of Object.keys(params)) {
      translate = translate.replaceAll('{' + keyParam + '}', params[keyParam])
    }

    return translate;
  }

}
