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
import { HttpClientModule } from '@angular/common/http';

describe('DdrDropdown', () => {
    let fixture: ComponentFixture<DdrDropdownComponent<any>>;
    let component: DdrDropdownComponent<any>;
    let inputGroup: DebugElement;

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
                DdrDropdownComponent,
                HttpClientModule
            ]
        }).compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(DdrDropdownComponent);

                component = fixture.componentInstance;
                component.options = [
                    {
                        label: 'Label1',
                        value: { prop1: 'prop1', prop2: 'prop2' }
                    },
                    {
                        label: 'Label2',
                        value: { prop1: 'prop3', prop2: 'prop4' }
                    },
                    {
                        label: 'Label3',
                        value: { prop1: 'prop5', prop2: 'prop6' }
                    },
                    {
                        label: 'Label4',
                        value: { prop1: 'prop7', prop2: 'prop8' }
                    },
                ];
                inputGroup = fixture.debugElement.query(By.directive(DdrInputGroupComponent));
            });
    }));
    it('element should be selected', waitForAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            inputGroup.triggerEventHandler('action');
            fixture.detectChanges();
            expect(component.showItems).toBeTrue();

            let panelItems = fixture.debugElement.query(By.css('.ddr-dropdown__panel-items'));
            expect(panelItems).not.toBeNull();

            spyOn(component.selectItem, "emit");

            let firstElement = fixture.debugElement.query(By.css('.ddr-dropdown__panel-items ul li:first-child'));
            firstElement.triggerEventHandler('click');

            expect(component.value).toEqual({ prop1: 'prop1', prop2: 'prop2' });
            expect(component.valueShow).toBe('Label1');
            expect(component.showItems).toBeFalse();

            expect(component.selectItem.emit).withContext('El evento selectItem debe lanzarse').toHaveBeenCalled();

        });
    }));

    it('should filter by text', waitForAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            inputGroup.triggerEventHandler('action');
            fixture.detectChanges();
            expect(component.showItems).toBeTrue();

            let panelItems = fixture.debugElement.query(By.css('.ddr-dropdown__panel-items'));
            expect(panelItems).not.toBeNull();

            let inputFilter = fixture.debugElement.query(By.css('.ddr-dropdown__panel-items--search--input'));
            inputFilter.nativeElement.value = 'Label2';
            inputFilter.triggerEventHandler('keyup');
            fixture.detectChanges();

            let firstElement = fixture.debugElement.query(By.css('.ddr-dropdown__panel-items ul li:first-child'));

            expect(firstElement).not.toBeNull();
            expect(component.optionsShow[0].label).toBe('Label2');

        });
    }));

    it('should not appear options when we filter', waitForAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            inputGroup.triggerEventHandler('action');
            fixture.detectChanges();
            expect(component.showItems).toBeTrue();

            let panelItems = fixture.debugElement.query(By.css('.ddr-dropdown__panel-items'));
            expect(panelItems).not.toBeNull();

            let inputFilter = fixture.debugElement.query(By.css('.ddr-dropdown__panel-items--search--input'));
            inputFilter.nativeElement.value = 'Label11';
            inputFilter.triggerEventHandler('keyup');
            fixture.detectChanges();

            let firstElement = fixture.debugElement.query(By.css('.ddr-dropdown__panel-items ul li:first-child'));

            expect(firstElement).toBeNull();
            expect(component.optionsShow.length).toBe(0);

        });
    }));

    it('options panel should not appear', waitForAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            component.disabled = true;
            inputGroup.triggerEventHandler('action');
            fixture.detectChanges();
            expect(component.showItems).toBeFalse();
        });
    }));

    it('elements should be selected', waitForAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            component.multiple = true;

            inputGroup.triggerEventHandler('action');
            fixture.detectChanges();
            expect(component.showItems).toBeTrue();

            let panelItems = fixture.debugElement.query(By.css('.ddr-dropdown__panel-items'));
            expect(panelItems).not.toBeNull();

            spyOn(component.selectMultipleItem, "emit");

            let firstElement = fixture.debugElement.query(By.css('.ddr-dropdown__panel-items ul li:nth-child(2)'));
            firstElement.triggerEventHandler('click');

            expect(component.value).toEqual([{ prop1: 'prop1', prop2: 'prop2' }]);
            expect(component.valueShow).toBe('Label1');
            expect(component.showItems).toBeTrue();
            expect(component.selectMultipleItem.emit).withContext('El evento selectMultipleItem debe lanzarse').toHaveBeenCalledWith([
                { prop1: 'prop1', prop2: 'prop2' }
            ]);

            let secondElement = fixture.debugElement.query(By.css('.ddr-dropdown__panel-items ul li:nth-child(3)'));
            secondElement.triggerEventHandler('click');

            expect(component.value).toEqual([{ prop1: 'prop1', prop2: 'prop2' }, { prop1: 'prop3', prop2: 'prop4' }]);
            expect(component.valueShow).toBe('Label1, Label2');
            expect(component.showItems).toBeTrue();
            expect(component.selectMultipleItem.emit).withContext('El evento selectMultipleItem debe lanzarse').toHaveBeenCalledWith([
                { prop1: 'prop1', prop2: 'prop2' },
                { prop1: 'prop3', prop2: 'prop4' }
            ]);

            secondElement.triggerEventHandler('click');

            expect(component.value).toEqual([{ prop1: 'prop1', prop2: 'prop2' }]);
            expect(component.valueShow).toBe('Label1');
            expect(component.showItems).toBeTrue();
            expect(component.selectMultipleItem.emit).withContext('El evento selectMultipleItem debe lanzarse').toHaveBeenCalledWith([{ prop1: 'prop1', prop2: 'prop2' }]);

            firstElement.triggerEventHandler('click');

            expect(component.value).toEqual([]);
            expect(component.valueShow).toBe('');
            expect(component.showItems).toBeTrue();
            expect(component.selectMultipleItem.emit).withContext('El evento selectMultipleItem debe lanzarse').toHaveBeenCalledWith([]);

        });
    }));


    it('all elements should be selected', waitForAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            component.multiple = true;

            inputGroup.triggerEventHandler('action');
            fixture.detectChanges();
            expect(component.showItems).toBeTrue();

            let panelItems = fixture.debugElement.query(By.css('.ddr-dropdown__panel-items'));
            expect(panelItems).not.toBeNull();

            spyOn(component.selectMultipleItem, "emit");

            let firstElement = fixture.debugElement.query(By.css('.ddr-dropdown__panel-items ul li:first-child'));
            firstElement.triggerEventHandler('click');

            expect(component.value).toEqual([
                { prop1: 'prop1', prop2: 'prop2' },
                { prop1: 'prop3', prop2: 'prop4' },
                { prop1: 'prop5', prop2: 'prop6' },
                { prop1: 'prop7', prop2: 'prop8' }
            ]);
            expect(component.checkAll).toBeTrue();
            expect(component.valueShow).toBe('Label1, Label2, Label3, Label4');
            expect(component.showItems).toBeTrue();
            expect(component.selectMultipleItem.emit).withContext('El evento selectMultipleItem debe lanzarse').toHaveBeenCalledWith([
                { prop1: 'prop1', prop2: 'prop2' },
                { prop1: 'prop3', prop2: 'prop4' },
                { prop1: 'prop5', prop2: 'prop6' },
                { prop1: 'prop7', prop2: 'prop8' }
            ]);

            firstElement.triggerEventHandler('click');

            expect(component.value).toEqual([]);
            expect(component.valueShow).toBe('');
            expect(component.showItems).toBeTrue();
            expect(component.selectMultipleItem.emit).withContext('El evento selectMultipleItem debe lanzarse').toHaveBeenCalledWith([]);

        });
    }));

    it('empty options', waitForAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            component.options = [];
            component.optionsShow = [];
            fixture.detectChanges();

            inputGroup.triggerEventHandler('action');
            fixture.detectChanges();
            expect(component.showItems).toBeTrue();

            let panelItems = fixture.debugElement.query(By.css('.ddr-dropdown__panel-items'));
            expect(panelItems).not.toBeNull();

            let firstElement = fixture.debugElement.query(By.css('.ddr-dropdown__panel-items ul li:first-child'));

            expect(firstElement).toBeNull();

        });
    }));

    it('preload element', waitForAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            spyOn(component.selectItem, "emit");

            spyOn(component.changeValue, "subscribe");
            component.writeValue({ prop1: 'prop3', prop2: 'prop4' });

            fixture.detectChanges();

            expect(component.value).toEqual({ prop1: 'prop3', prop2: 'prop4' });
            expect(component.valueShow).toBe('Label2');
            expect(component.showItems).toBeFalse();

            expect(component.selectItem.emit).withContext('El evento selectItem no debe lanzarse').not.toHaveBeenCalledWith({ prop1: 'prop3', prop2: 'prop4' });

        });
    }));

    it('preload elements', waitForAsync(() => {

        fixture.detectChanges();
        fixture.whenStable().then(() => {

            component.multiple = true;

            spyOn(component.selectMultipleItem, "emit");

            spyOn(component.changeValue, "subscribe");
            component.writeValue([
                { prop1: 'prop3', prop2: 'prop4' },
                { prop1: 'prop5', prop2: 'prop6' }
            ]);
            fixture.detectChanges();

            expect(component.value).toEqual([
                { prop1: 'prop3', prop2: 'prop4' },
                { prop1: 'prop5', prop2: 'prop6' }
            ]);
            expect(component.valueShow).toBe('Label2, Label3');
            expect(component.showItems).toBeFalse();

            expect(component.selectMultipleItem.emit).withContext('El evento selectItem no debe lanzarse').not.toHaveBeenCalledWith([
                { prop1: 'prop3', prop2: 'prop4' },
                { prop1: 'prop5', prop2: 'prop6' }
            ]);

        });
    }));

    it('clean value (single)', waitForAsync(() => {

        fixture.detectChanges();
        fixture.whenStable().then(() => {

            spyOn(component.selectItem, "emit");

            spyOn(component.changeValue, "subscribe");
            component.writeValue({ prop1: 'prop3', prop2: 'prop4' });
            fixture.detectChanges();

            expect(component.value).toEqual({ prop1: 'prop3', prop2: 'prop4' });
            expect(component.valueShow).toBe('Label2');
            expect(component.showItems).toBeFalse();
            fixture.detectChanges();

            component.writeValue(null);
            fixture.detectChanges();

            expect(component.value).toEqual(null);
            expect(component.valueShow).toBe(null);
            fixture.detectChanges();

        });
    }));

    it('clean value (multiple)', waitForAsync(() => {

        fixture.detectChanges();
        fixture.whenStable().then(() => {

            component.multiple = true;

            spyOn(component.selectMultipleItem, "emit");

            spyOn(component.changeValue, "subscribe");
            component.writeValue([
                { prop1: 'prop1', prop2: 'prop2' },
                { prop1: 'prop3', prop2: 'prop4' }
            ]);
            fixture.detectChanges();

            expect(component.value).toEqual([
                { prop1: 'prop1', prop2: 'prop2' },
                { prop1: 'prop3', prop2: 'prop4' }
            ]);
            expect(component.valueShow).toBe('Label1, Label2');
            expect(component.showItems).toBeFalse();
            fixture.detectChanges();

            component.writeValue(null);
            fixture.detectChanges();

            expect(component.value).toEqual(null);
            expect(component.valueShow).toBe(null);
            fixture.detectChanges();

        });
    }));
});
