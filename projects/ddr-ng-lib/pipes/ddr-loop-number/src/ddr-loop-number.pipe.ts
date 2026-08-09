import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ddrLoopNumber'
})
export class DdrLoopNumberPipe implements PipeTransform {

  transform(end: number, start: number = 0, step: number = 1, reverse: boolean = false, includeLast: boolean = false): number[] {

    let result = [];

    if (includeLast) {
      for (let i = start; i <= end; i += step) {
        result.push(i);
      }
    } else {
      for (let i = start; i < end; i += step) {
        result.push(i);
      }
    }

    if (reverse) {
      result = result.reverse();
    }
    return result;
  }

}
