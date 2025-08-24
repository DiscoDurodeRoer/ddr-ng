import { Pipe, PipeTransform } from '@angular/core';
import { DdrLoopNumberParams } from './bean/ddr-loop-number-params';

@Pipe({
  name: 'ddrLoopNumber',
  standalone: true
})
export class DdrLoopNumberPipe implements PipeTransform {

  transform(end: number, params?: DdrLoopNumberParams): number[] {

    let result = [];

    if (!params) {
      params = {};
    }

    if (!params.start) {
      params.start = 0;
    }

    if (!params.step) {
      params.step = 1;
    }

    if (params.includeLast) {
      for (let i = params.start; i <= end; i += params.step) {
        result.push(i);
      }
    } else {
      for (let i = params.start; i < end; i += params.step) {
        result.push(i);
      }
    }

    if (params.reverse) {
      result = result.reverse();
    }
    return result;
  }

}
