import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ddrNestedProperty'
})
export class DdrNestedPropertyPipe implements PipeTransform {

  transform(object: any, path: string): any {
    if (!object || !path) return '';
    return path.split('.').reduce((acc, part) => acc?.[part], object) ?? '';
  }

}
