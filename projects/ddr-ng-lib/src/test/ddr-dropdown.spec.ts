import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DdrDropdownComponent } from '../components/ddr-dropdown/ddr-dropdown.component';
import { DdrInputGroupComponent } from '../components/ddr-input-group/ddr-input-group.component';
import { DdrClickOutsideDirective } from '../directives/ddr-click-outside.directive';
import { DdrTranslatePipe } from '../pipes/ddr-translate.pipe';
import { DdrButtonComponent } from '../components/ddr-button/ddr-button.component';
import { DdrCheckboxComponent } from '../components/ddr-checkbox/ddr-checkbox.component';
import { provideHttpClient } from '@angular/common/http';
import { expect, describe, it, vi, beforeEach } from 'vitest';

describe('DdrDropdown', () => {

    let fixtureDropdownNumber: ComponentFixture<DdrDropdownComponent<number>>;
    let componentDropdownNumber: DdrDropdownComponent<number>;
    let inputGroupDropdownNumber: DebugElement;

    let fixtureDropdownObject: ComponentFixture<DdrDropdownComponent<{
        value: string;
    }>>;
    let componentDropdownObject: DdrDropdownComponent<{
        value: string;
    }>;
    let inputGroupDropdownObject: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                FormsModule,
                DdrButtonComponent,
                DdrInputGroupComponent,
                DdrCheckboxComponent,
                DdrTranslatePipe,
                DdrClickOutsideDirective,
                DdrDropdownComponent
            ],
            providers: [
                provideHttpClient()
            ]
        }).compileComponents();


        fixtureDropdownNumber = TestBed.createComponent(DdrDropdownComponent<number>);

        componentDropdownNumber = fixtureDropdownNumber.componentInstance;
        fixtureDropdownNumber.componentRef.setInput('options', [
            {
                label: 'Label1',
                value: 1
            },
            {
                label: 'Label2',
                value: 2
            },
            {
                label: 'Label3',
                value: 3
            },
            {
                label: 'Label4',
                value: 4
            }
        ]);

        fixtureDropdownNumber.detectChanges();

        inputGroupDropdownNumber = fixtureDropdownNumber.debugElement.query(By.directive(DdrInputGroupComponent));

        fixtureDropdownObject = TestBed.createComponent(DdrDropdownComponent<{
            value: string;
        }>);
        componentDropdownObject = fixtureDropdownObject.componentInstance;
        fixtureDropdownObject.componentRef.setInput('options', [
            {
                label: 'Label1',
                value: { value: 'Value1' }
            },
            {
                label: 'Label2',
                value: { value: 'Value2' }
            },
            {
                label: 'Label3',
                value: { value: 'Value3' }
            },
            {
                label: 'Label4',
                value: { value: 'Value4' }
            },
        ]);
        fixtureDropdownObject.componentRef.setInput('compareFn', (a: {
            value: string;
        }, b: {
            value: string;
        }) => a.value == b.value)
        fixtureDropdownObject.detectChanges();
        inputGroupDropdownObject = fixtureDropdownObject.debugElement.query(By.directive(DdrInputGroupComponent));
    });

    it('element should be selected (numbers)', async () => {
        fixtureDropdownNumber.detectChanges();

        inputGroupDropdownNumber.triggerEventHandler('action');

        await new Promise(r => setTimeout(r, 150));

        expect(componentDropdownNumber.showItems()).toBe(true);

        let panelItems = fixtureDropdownNumber.debugElement.query(By.css('.ddr-dropdown__panel-items'));
        expect(panelItems).not.toBeNull();

        vi.spyOn(componentDropdownNumber.selectItem, "emit");

        fixtureDropdownNumber.detectChanges();
        const firstElement = fixtureDropdownNumber.debugElement.query(By.css('.ddr-dropdown__panel-items ul li:first-child'));
        firstElement.triggerEventHandler('click');

        expect(componentDropdownNumber.value()).toEqual(1);
        expect(componentDropdownNumber.valueShow()).toBe('Label1');
        expect(componentDropdownNumber.showItems()).toBe(false);

        expect(componentDropdownNumber.selectItem.emit, 'El evento selectItem debe lanzarse').toHaveBeenCalledWith({
            label: 'Label1',
            value: 1,
            selected: true
        });

    });

    it('element should be selected (objects)', async () => {
        fixtureDropdownObject.detectChanges();

        inputGroupDropdownObject.triggerEventHandler('action');

        await new Promise(r => setTimeout(r, 150));

        expect(componentDropdownObject.showItems()).toBe(true);

        let panelItems = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items'));
        expect(panelItems).not.toBeNull();

        vi.spyOn(componentDropdownObject.selectItem, "emit");

        fixtureDropdownObject.detectChanges();
        const firstElement = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items ul li:first-child'));
        firstElement.triggerEventHandler('click');
        fixtureDropdownObject.detectChanges();
        await fixtureDropdownObject.whenStable();
        fixtureDropdownObject.detectChanges();

        expect(componentDropdownObject.value()).toEqual({ value: 'Value1' });
        expect(componentDropdownObject.valueShow()).toBe('Label1');
        expect(componentDropdownObject.showItems()).toBe(false);

        expect(componentDropdownObject.selectItem.emit, 'El evento selectItem debe lanzarse').toHaveBeenCalledWith({
            label: 'Label1',
            value: { value: 'Value1' },
            selected: true
        });

    });

    it('should filter by text', async () => {
        fixtureDropdownObject.detectChanges();

        inputGroupDropdownObject.triggerEventHandler('action');
        await new Promise(r => setTimeout(r, 150));
        expect(componentDropdownObject.showItems()).toBe(true);

        let panelItems = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items'));
        fixtureDropdownObject.detectChanges();
        await fixtureDropdownObject.whenStable();
        fixtureDropdownObject.detectChanges();
        expect(panelItems).not.toBeNull();

        let inputFilter = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items--search--input'));
        inputFilter.nativeElement.value = 'Label2';
        inputFilter.nativeElement.dispatchEvent(new Event('input'));
        fixtureDropdownObject.detectChanges();

        let firstElement = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items ul li:first-child'));

        expect(firstElement).not.toBeNull();
        expect(componentDropdownObject.optionsShow()[0].label).toBe('Label2');

    });

    it('should not appear options when we filter', async () => {
        fixtureDropdownObject.detectChanges();

        inputGroupDropdownObject.triggerEventHandler('action');
        await new Promise(r => setTimeout(r, 150));
        expect(componentDropdownObject.showItems()).toBe(true);

        let panelItems = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items'));
        expect(panelItems).not.toBeNull();

        let inputFilter = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items--search--input'));
        inputFilter.nativeElement.value = 'Label11';
        inputFilter.nativeElement.dispatchEvent(new Event('input'));
        fixtureDropdownObject.detectChanges();

        let firstElement = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items ul li:first-child'));
        fixtureDropdownObject.detectChanges();
        expect(firstElement).toBeNull();
        expect(componentDropdownObject.optionsShow().length).toBe(0);

    });

    it('options panel should not appear', async () => {
        fixtureDropdownObject.detectChanges();

        fixtureDropdownObject.componentRef.setInput('disabled', true)
        inputGroupDropdownObject.triggerEventHandler('action');
        await new Promise(r => setTimeout(r, 150));
        expect(componentDropdownObject.showItems()).toBe(false);

    });

    it('empty options', async () => {
        fixtureDropdownObject.detectChanges();

        fixtureDropdownObject.componentRef.setInput('options', [])
        fixtureDropdownObject.detectChanges();

        inputGroupDropdownObject.triggerEventHandler('action');

        await new Promise(r => setTimeout(r, 150));

        expect(componentDropdownObject.showItems()).toBe(true);

        let panelItems = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items'));
        expect(panelItems).not.toBeNull();

        let firstElement = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items ul li:first-child'));

        expect(firstElement).toBeNull();

    });

    it('preload element', () => {
        fixtureDropdownObject.detectChanges();

        vi.spyOn(componentDropdownObject.selectItem, "emit");

        componentDropdownObject.value.set({ value: 'Value2' });

        fixtureDropdownObject.detectChanges();

        expect(componentDropdownObject.value()).toEqual({ value: 'Value2' });
        expect(componentDropdownObject.valueShow()).toBe('Label2');
        expect(componentDropdownObject.showItems()).toBe(false);

        expect(componentDropdownObject.selectItem.emit, 'El evento selectItem no debe lanzarse').not.toHaveBeenCalledWith({
            label: 'Label2',
            value: { value: 'Value2' }
        });

    });

    it('clean value', () => {

        fixtureDropdownObject.detectChanges();

        vi.spyOn(componentDropdownObject.selectItem, "emit");

        componentDropdownObject.value.set({ value: 'Value2' });
        fixtureDropdownObject.detectChanges();

        expect(componentDropdownObject.value()).toEqual({ value: 'Value2' });
        expect(componentDropdownObject.valueShow()).toBe('Label2');
        expect(componentDropdownObject.showItems()).toBe(false);
        fixtureDropdownObject.detectChanges();

        componentDropdownObject.value.set(null);
        fixtureDropdownObject.detectChanges();

        expect(componentDropdownObject.value()).toEqual(null);
        expect(componentDropdownObject.valueShow()).toBe('');
        fixtureDropdownObject.detectChanges();

    });

    it('Modify value', () => {

        componentDropdownObject.value.set({ value: 'Value2' });

        expect(componentDropdownObject.value()).toEqual({ value: 'Value2' });

    });

    it('allowDeselect', async () => {

        fixtureDropdownObject.componentRef.setInput('allowDeselect', true);

        fixtureDropdownObject.detectChanges();

        vi.spyOn(componentDropdownObject.selectItem, "emit");

        inputGroupDropdownObject.triggerEventHandler('action');
        await new Promise(r => setTimeout(r, 150));
        expect(componentDropdownObject.showItems()).toBe(true);

        let panelItems = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items'));
        expect(panelItems).not.toBeNull();

        fixtureDropdownObject.detectChanges();
        const firstElement = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items ul li:first-child'));
        firstElement.triggerEventHandler('click');

        expect(componentDropdownObject.value()).toEqual({ value: 'Value1' });
        expect(componentDropdownObject.valueShow()).toBe('Label1');
        expect(componentDropdownObject.showItems()).toBe(false);

        expect(componentDropdownObject.selectItem.emit, 'El evento selectItem debe lanzarse').toHaveBeenCalledWith({
            label: 'Label1',
            value: { value: 'Value1' },
            selected: true
        });

        firstElement.triggerEventHandler('click');

        expect(componentDropdownObject.value()).toBeNull();

        expect(componentDropdownObject.selectItem.emit, 'El evento selectItem debe lanzarse').toHaveBeenCalledWith({
            label: 'Label1',
            value: { value: 'Value1' },
            selected: false
        });

    });

});
