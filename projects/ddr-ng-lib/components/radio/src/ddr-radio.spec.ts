import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { expect, describe, it, vi, beforeEach } from 'vitest';
import { DdrRadioComponent } from './ddr-radio.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';

describe('DdrRadioComponent', () => {
    let fixture: ComponentFixture<DdrRadioComponent<string>>;
    let component: DdrRadioComponent<string>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                DdrTranslatePipe,
                DdrRadioComponent
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(DdrRadioComponent<string>);
        component = fixture.componentInstance;
        fixture.componentRef.setInput('options', [
            { label: 'Java', value: 'java', selected: false },
            { label: 'Angular', value: 'angular', selected: false },
            { label: 'NestJS', value: 'nestjs', selected: false },
            { label: 'Javascript', value: 'javascript', selected: false },
            { label: 'C', value: 'c', selected: false },
            { label: 'C++', value: 'cpp', selected: false }
        ]);
        expect(component.options().length).toBe(6);
    });

    it('should click radio', () => {
        fixture.detectChanges();


        vi.spyOn(component.clickRadio, "emit");

        let firstRadio = fixture.debugElement.query(By.css('.ddr-radio__container:nth-child(1) .ddr-radio__container--input'));
        firstRadio.triggerEventHandler('click');
        fixture.detectChanges();

        expect(component.clickRadio.emit, 'El evento clickRadio debe lanzarse').toHaveBeenCalledWith('java');
        expect(component.value()).toBe('java');

        let secondRadio = fixture.debugElement.query(By.css('.ddr-radio__container:nth-child(2) .ddr-radio__container--input'));
        secondRadio.triggerEventHandler('click');
        fixture.detectChanges();

        expect(component.clickRadio.emit, 'El evento clickRadio debe lanzarse').toHaveBeenCalledWith('angular');
        expect(component.value()).toBe('angular');

    });

    it('should not call event with same value', () => {
        fixture.detectChanges();


        const spy = vi.spyOn(component.clickRadio, "emit");

        let firstRadio = fixture.debugElement.query(By.css('.ddr-radio__container:nth-child(1) .ddr-radio__container--input'));
        firstRadio.triggerEventHandler('click');
        fixture.detectChanges();

        expect(component.clickRadio.emit, 'El evento clickRadio debe lanzarse').toHaveBeenCalledWith('java');
        expect(component.value()).toBe('java');

        spy.mockClear();

        firstRadio.triggerEventHandler('click');
        fixture.detectChanges();

        expect(component.clickRadio.emit, 'El evento clickRadio no debe lanzarse').toHaveBeenCalledTimes(0);
        expect(component.value()).toBe('java');

    });

    it('option should be selected by value', () => {
        component.value.set('java');
        fixture.detectChanges();

        let firstRadio = fixture.debugElement.query(By.css('.ddr-radio__container:nth-child(1) .ddr-radio__container--input--active'));
        fixture.detectChanges();
        expect(firstRadio).not.toBeNull();
        expect(component.value()).toBe('java');

    });

});
