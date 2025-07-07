import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DdrDropdownComponent } from '../components/ddr-dropdown/ddr-dropdown.component';
import { DdrInputGroupComponent } from '../components/ddr-input-group/ddr-input-group.component';
import { DdrClickOutsideDirective } from '../directives/ddr-click-outside.directive';
import { DdrTranslatePipe } from '../pipes/ddr-translate.pipe';
import { DdrButtonComponent } from '../components/ddr-button/ddr-button.component'
import { DdrCheckboxComponent } from '../components/ddr-checkbox/ddr-checkbox.component';
import { provideHttpClient } from '@angular/common/http';

describe('DdrDropdown', () => {

    let fixtureDropdownNumber: ComponentFixture<DdrDropdownComponent<number>>;
    let componentDropdownNumber: DdrDropdownComponent<number>;
    let inputGroupDropdownNumber: DebugElement;

    let fixtureDropdownObject: ComponentFixture<DdrDropdownComponent<{ value: string }>>;
    let componentDropdownObject: DdrDropdownComponent<{ value: string }>;
    let inputGroupDropdownObject: DebugElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
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
        }).compileComponents()
            .then(() => {

                fixtureDropdownNumber = TestBed.createComponent(DdrDropdownComponent<number>);

                componentDropdownNumber = fixtureDropdownNumber.componentInstance;
                componentDropdownNumber.options = [
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
                ];
                inputGroupDropdownNumber = fixtureDropdownNumber.debugElement.query(By.directive(DdrInputGroupComponent));

                fixtureDropdownObject = TestBed.createComponent(DdrDropdownComponent<{ value: string }>);
                componentDropdownObject = fixtureDropdownObject.componentInstance;
                componentDropdownObject.options = [
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
                ];
                componentDropdownObject.compareFn = (a: { value: string }, b: { value: string }) => a.value == b.value;
                inputGroupDropdownObject = fixtureDropdownObject.debugElement.query(By.directive(DdrInputGroupComponent));
            });
    }));

    it('element should be selected (numbers)', waitForAsync(() => {
        fixtureDropdownNumber.detectChanges();
        fixtureDropdownNumber.whenStable().then(() => {

            inputGroupDropdownNumber.triggerEventHandler('action');
            fixtureDropdownNumber.detectChanges();
            expect(componentDropdownNumber.showItems).toBeTrue();

            let panelItems = fixtureDropdownNumber.debugElement.query(By.css('.ddr-dropdown__panel-items'));
            expect(panelItems).not.toBeNull();

            spyOn(componentDropdownNumber.selectItem, "emit");

            fixtureDropdownNumber.detectChanges();
            const firstElement = fixtureDropdownNumber.debugElement.query(By.css('.ddr-dropdown__panel-items ul li:first-child'));
            firstElement.triggerEventHandler('click');

            expect(componentDropdownNumber.value).toEqual(1);
            expect(componentDropdownNumber.valueShow).toBe('Label1');
            expect(componentDropdownNumber.showItems).toBeFalse();

            expect(componentDropdownNumber.selectItem.emit).withContext('El evento selectItem debe lanzarse').toHaveBeenCalledWith({
                label: 'Label1',
                value: 1,
                selected: true
            });

        });
    }));

    it('element should be selected (objects)', waitForAsync(() => {
        fixtureDropdownObject.detectChanges();
        fixtureDropdownObject.whenStable().then(() => {

            inputGroupDropdownObject.triggerEventHandler('action');
            fixtureDropdownObject.detectChanges();
            expect(componentDropdownObject.showItems).toBeTrue();

            let panelItems = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items'));
            expect(panelItems).not.toBeNull();

            spyOn(componentDropdownObject.selectItem, "emit");

            fixtureDropdownObject.detectChanges();
            const firstElement = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items ul li:first-child'));
            firstElement.triggerEventHandler('click');

            expect(componentDropdownObject.value).toEqual({ value: 'Value1' });
            expect(componentDropdownObject.valueShow).toBe('Label1');
            expect(componentDropdownObject.showItems).toBeFalse();

            expect(componentDropdownObject.selectItem.emit).withContext('El evento selectItem debe lanzarse').toHaveBeenCalledWith({
                label: 'Label1',
                value: { value: 'Value1' },
                selected: true
            });

        });
    }));

    it('should filter by text', waitForAsync(() => {
        fixtureDropdownObject.detectChanges();
        fixtureDropdownObject.whenStable().then(() => {

            inputGroupDropdownObject.triggerEventHandler('action');
            fixtureDropdownObject.detectChanges();
            expect(componentDropdownObject.showItems).toBeTrue();

            let panelItems = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items'));
            expect(panelItems).not.toBeNull();

            let inputFilter = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items--search--input'));
            inputFilter.nativeElement.value = 'Label2';
            inputFilter.triggerEventHandler('keyup');
            fixtureDropdownObject.detectChanges();

            let firstElement = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items ul li:first-child'));

            expect(firstElement).not.toBeNull();
            expect(componentDropdownObject.optionsShow[0].label).toBe('Label2');

        });
    }));

    it('should not appear options when we filter', waitForAsync(() => {
        fixtureDropdownObject.detectChanges();
        fixtureDropdownObject.whenStable().then(() => {

            inputGroupDropdownObject.triggerEventHandler('action');
            fixtureDropdownObject.detectChanges();
            expect(componentDropdownObject.showItems).toBeTrue();

            let panelItems = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items'));
            expect(panelItems).not.toBeNull();

            let inputFilter = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items--search--input'));
            inputFilter.nativeElement.value = 'Label11';
            inputFilter.triggerEventHandler('keyup');
            fixtureDropdownObject.detectChanges();

            let firstElement = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items ul li:first-child'));

            expect(firstElement).toBeNull();
            expect(componentDropdownObject.optionsShow.length).toBe(0);

        });
    }));

    it('options panel should not appear', waitForAsync(() => {
        fixtureDropdownObject.detectChanges();
        fixtureDropdownObject.whenStable().then(() => {

            componentDropdownObject.disabled = true;
            inputGroupDropdownObject.triggerEventHandler('action');
            fixtureDropdownObject.detectChanges();
            expect(componentDropdownObject.showItems).toBeFalse();
        });
    }));

    it('empty options', waitForAsync(() => {
        fixtureDropdownObject.detectChanges();
        fixtureDropdownObject.whenStable().then(() => {

            componentDropdownObject.options = [];
            componentDropdownObject.optionsShow = [];
            fixtureDropdownObject.detectChanges();

            inputGroupDropdownObject.triggerEventHandler('action');
            fixtureDropdownObject.detectChanges();
            expect(componentDropdownObject.showItems).toBeTrue();

            let panelItems = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items'));
            expect(panelItems).not.toBeNull();

            let firstElement = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items ul li:first-child'));

            expect(firstElement).toBeNull();

        });
    }));

    it('preload element', waitForAsync(() => {
        fixtureDropdownObject.detectChanges();
        fixtureDropdownObject.whenStable().then(() => {

            spyOn(componentDropdownObject.selectItem, "emit");

            componentDropdownObject.value = { value: 'Value2' };

            fixtureDropdownObject.detectChanges();

            expect(componentDropdownObject.value).toEqual({ value: 'Value2' });
            expect(componentDropdownObject.valueShow).toBe('Label2');
            expect(componentDropdownObject.showItems).toBeFalse();

            expect(componentDropdownObject.selectItem.emit).withContext('El evento selectItem no debe lanzarse').not.toHaveBeenCalledWith(
                {
                    label: 'Label2',
                    value: { value: 'Value2' }
                },
            );

        });
    }));

    it('clean value', waitForAsync(() => {

        fixtureDropdownObject.detectChanges();
        fixtureDropdownObject.whenStable().then(() => {

            spyOn(componentDropdownObject.selectItem, "emit");

            componentDropdownObject.value = { value: 'Value2' };
            fixtureDropdownObject.detectChanges();

            expect(componentDropdownObject.value).toEqual({ value: 'Value2' });
            expect(componentDropdownObject.valueShow).toBe('Label2');
            expect(componentDropdownObject.showItems).toBeFalse();
            fixtureDropdownObject.detectChanges();

            componentDropdownObject.value = null;
            fixtureDropdownObject.detectChanges();

            expect(componentDropdownObject.value).toEqual(null);
            expect(componentDropdownObject.valueShow).toBe('');
            fixtureDropdownObject.detectChanges();

        });
    }));

    it('Modify value', waitForAsync(() => {

        spyOn(componentDropdownObject.changeValue, "next");

        componentDropdownObject.value = { value: 'Value2' };

        expect(componentDropdownObject.value).toEqual({ value: 'Value2' })

        expect(componentDropdownObject.changeValue.next).withContext('changeValue debe llamarse').toHaveBeenCalledWith({ value: 'Value2' });

    }));

    it('allowDeselect', waitForAsync(() => {

        componentDropdownObject.allowDeselect = true;

        fixtureDropdownObject.detectChanges();
        fixtureDropdownObject.whenStable().then(() => {

            spyOn(componentDropdownObject.selectItem, "emit");

            inputGroupDropdownObject.triggerEventHandler('action');
            fixtureDropdownObject.detectChanges();
            expect(componentDropdownObject.showItems).toBeTrue();

            let panelItems = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items'));
            expect(panelItems).not.toBeNull();

            fixtureDropdownObject.detectChanges();
            const firstElement = fixtureDropdownObject.debugElement.query(By.css('.ddr-dropdown__panel-items ul li:first-child'));
            firstElement.triggerEventHandler('click');

            expect(componentDropdownObject.value).toEqual({ value: 'Value1' });
            expect(componentDropdownObject.valueShow).toBe('Label1');
            expect(componentDropdownObject.showItems).toBeFalse();

            expect(componentDropdownObject.selectItem.emit).withContext('El evento selectItem debe lanzarse').toHaveBeenCalledWith({
                label: 'Label1',
                value: { value: 'Value1' },
                selected: true
            });

            firstElement.triggerEventHandler('click');

            expect(componentDropdownObject.value).toBeNull();

            expect(componentDropdownObject.selectItem.emit).withContext('El evento selectItem debe lanzarse').toHaveBeenCalledWith({
                label: 'Label1',
                value: { value: 'Value1' },
                selected: false
            });

        });
    }));

});
