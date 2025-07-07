import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ddrNestedProperty'
})
export class DdrNestedPropertyPipe implements PipeTransform {

  transform(obj: any, path: string): any {
    if (!obj || !path) return '';
    return path.split('.').reduce((acc, part) => acc?.[part], obj) ?? '';
  }

}
