import { fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { DdrLoopNumberPipe } from '../pipes/ddr-loop-number/ddr-loop-number.pipe';

describe('DdrLoopNumberPipe', () => {
    let pipe: DdrLoopNumberPipe;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                DdrLoopNumberPipe
            ]
        }).compileComponents()
            .then(() => {
                pipe = new DdrLoopNumberPipe();
            });
    }));

    it('loop 0 to 10', fakeAsync(() => {
        expect(pipe.transform(10)).withContext("Debe mostrar de 0 a 9").toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(pipe.transform(10, { includeLast: true })).withContext("Debe mostrar de 0 a 10").toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }));

    it('params null', fakeAsync(() => {
        expect(pipe.transform(10)).withContext("Debe mostrar de 0 a 9").toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }));

    it('loop negative', fakeAsync(() => {
        expect(pipe.transform(5, { start: -5 })).withContext("Debe mostrar de -5 a 4").toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]);
        expect(pipe.transform(5, { start: -5, includeLast: true })).withContext("Debe mostrar de -5 a 5").toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]);
    }));

    it('loop reverse', fakeAsync(() => {
        expect(pipe.transform(10, { reverse: true })).withContext("Debe mostrar de 9 a 0").toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
        expect(pipe.transform(10, { reverse: true, includeLast: true })).withContext("Debe mostrar de 10 a 0").toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    }));

    it('loop step decimal', fakeAsync(() => {
        expect(pipe.transform(5, { step: 0.5 })).withContext("Debe mostrar de 0 a 4.5").toEqual([0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5]);
        expect(pipe.transform(5, { step: 0.5, includeLast: true })).withContext("Debe mostrar de 0 a 5").toEqual([0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]);
    }));

});
