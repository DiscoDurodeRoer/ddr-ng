import { TestBed } from '@angular/core/testing';
import { expect, describe, it, vi, beforeEach } from 'vitest';
import { DdrLoopNumberPipe } from './ddr-loop-number.pipe';

describe('DdrLoopNumberPipe', () => {
    let pipe: DdrLoopNumberPipe;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DdrLoopNumberPipe]
        }).compileComponents();

        pipe = new DdrLoopNumberPipe();
    });

    it('loop 0 to 10', () => {
        expect(pipe.transform(10), "Debe mostrar de 0 a 9").toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(pipe.transform(10, 0, 1, false, true), "Debe mostrar de 0 a 10").toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('params null', () => {
        expect(pipe.transform(10), "Debe mostrar de 0 a 9").toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('loop negative', () => {
        expect(pipe.transform(5, -5), "Debe mostrar de -5 a 4").toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]);
        expect(pipe.transform(5, -5, 1, false, true), "Debe mostrar de -5 a 5").toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]);
    });

    it('loop reverse', () => {
        expect(pipe.transform(10, 0, 1, true, false), "Debe mostrar de 9 a 0").toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
        expect(pipe.transform(10, 0, 1, true, true), "Debe mostrar de 10 a 0").toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    });

    it('loop step decimal', () => {
        expect(pipe.transform(5, 0, 0.5), "Debe mostrar de 0 a 4.5").toEqual([0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]);
        expect(pipe.transform(5, 0, 0.5, false, true), "Debe mostrar de 0 a 5").toEqual([0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]);
    });

});
