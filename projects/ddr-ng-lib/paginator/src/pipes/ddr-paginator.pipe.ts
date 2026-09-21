import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ddrPaginator',
  standalone: true,
  pure: true,
})
export class DdrPaginatorPipe implements PipeTransform {

  transform(
    items: any[] | null | undefined,
    page: number,
    pageSize: number,
    startZero: boolean = false
  ): any[] {
    if (!items?.length || pageSize <= 0) return [];

    const start = (startZero ? page : page - 1) * pageSize;

    return items.slice(
      start,
      start + pageSize,
    );
  }
}