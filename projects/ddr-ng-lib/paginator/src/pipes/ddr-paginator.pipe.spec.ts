import { describe, expect, it } from 'vitest';
import { DdrPaginatorPipe } from './ddr-paginator.pipe';

describe('DdrPaginatorPipe', () => {
  it('create an instance', () => {
    const pipe = new DdrPaginatorPipe();
    expect(pipe).toBeTruthy();
  });
});
