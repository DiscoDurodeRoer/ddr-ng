import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { DdrDropdownMultipleComponent } from '../components/ddr-dropdown-multiple/ddr-dropdown-multiple.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DdrButtonComponent } from '../components/ddr-button/ddr-button.component';
import { DdrInputGroupComponent } from '../components/ddr-input-group/ddr-input-group.component';
import { DdrCheckboxComponent } from '../components/ddr-checkbox/ddr-checkbox.component';
import { DdrTranslatePipe } from '../pipes/ddr-translate.pipe';
import { DdrClickOutsideDirective } from '../directives/ddr-click-outside.directive';
import { DdrDropdownComponent } from '../components/ddr-dropdown/ddr-dropdown.component';
import { By } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

describe('DdrDropdownMultipleComponent', () => {
  let component: DdrDropdownMultipleComponent<{ value: string }>;
  let fixture: ComponentFixture<DdrDropdownMultipleComponent<{ value: string }>>;

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
        DdrDropdownComponent,
        DdrDropdownMultipleComponent
      ],
      providers: [
        provideHttpClient()
      ]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DdrDropdownMultipleComponent<{ value: string }>);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.options = [
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
        component.compareFn = (a: { value: string }, b: { value: string }) => a.value == b.value;
      });


  });

  it('preload elements', waitForAsync(() => {

    fixture.detectChanges();
    fixture.whenStable().then(() => {

      spyOn(component.selectItems, "emit");

      spyOn(component.changeValue, "subscribe");
      component.writeValue([
        { value: 'Value2' },
        { value: 'Value3' }
      ]);
      fixture.detectChanges();

      expect(component.value).toEqual([
        { value: 'Value2' },
        { value: 'Value3' }
      ]);

      expect(component.dropdown!.valueShow).toBe('Label2, Label3');

      expect(component.selectItems.emit).withContext('El evento selectItem no debe lanzarse').not.toHaveBeenCalledWith([
        {
          label: 'Label2',
          value: { value: 'Value2' }
        },
        {
          label: 'Label3',
          value: { value: 'Value3' }
        },
      ]);

    });
  }));

  it('elements should be selected', fakeAsync(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {

      const inputGroup = fixture.debugElement.query(By.directive(DdrInputGroupComponent));
      inputGroup.triggerEventHandler('action');
      tick(100);
      fixture.detectChanges();

      let panelItems = fixture.debugElement.query(By.css('.ddr-dropdown__panel-items'));
      expect(panelItems).not.toBeNull();

      spyOn(component.selectItems, "emit");

      let firstElement = fixture.debugElement.query(By.css('.ddr-dropdown__panel-items ul li:nth-child(1)'));
      firstElement.triggerEventHandler('click');

      expect(component.value).toEqual([
        { value: 'Value1' }
      ]);
      expect(component.dropdown!.valueShow).toBe('Label1');
      expect(component.selectItems.emit).withContext('El evento selectItems debe lanzarse').toHaveBeenCalledWith([
        {
          label: 'Label1',
          value: { value: 'Value1' },
          selected: true
        }
      ]);

      let secondElement = fixture.debugElement.query(By.css('.ddr-dropdown__panel-items ul li:nth-child(2)'));
      secondElement.triggerEventHandler('click');

      expect(component.value).toEqual([
        { value: 'Value1' },
        { value: 'Value2' }
      ]);
      expect(component.dropdown!.valueShow).toBe('Label1, Label2');
      expect(component.selectItems.emit).withContext('El evento selectItems debe lanzarse').toHaveBeenCalledWith([
        {
          label: 'Label1',
          value: { value: 'Value1' },
          selected: true
        },
        {
          label: 'Label2',
          value: { value: 'Value2' },
          selected: true
        },
      ]);

      secondElement.triggerEventHandler('click');

      expect(component.value).toEqual([
        { value: 'Value1' }
      ]);
      expect(component.dropdown!.valueShow).toBe('Label1');
      expect(component.selectItems.emit).withContext('El evento selectItems debe lanzarse').toHaveBeenCalledWith([
        {
          label: 'Label1',
          value: { value: 'Value1' },
          selected: true
        }
      ]);
      firstElement.triggerEventHandler('click');

      expect(component.value).toEqual([]);
      expect(component.dropdown!.valueShow).toBe('');
      expect(component.selectItems.emit).withContext('El evento selectItems debe lanzarse').toHaveBeenCalledWith([]);

    });
  }));

  it('elements should be selected using checkbox', fakeAsync(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {

      const inputGroup = fixture.debugElement.query(By.directive(DdrInputGroupComponent));
      inputGroup.triggerEventHandler('action');
      tick(100);
      fixture.detectChanges();

      const panelItems = fixture.debugElement.query(By.css('.ddr-dropdown__panel-items'));
      expect(panelItems).not.toBeNull();

      spyOn(component.selectItems, "emit");

      const firstElement = fixture.debugElement.query(By.css('.ddr-dropdown__panel-items ul li:nth-child(1) .ddr-checkbox__container--input'));
      firstElement.triggerEventHandler('click');

      expect(component.value).toEqual([
        { value: 'Value1' }
      ]);
      expect(component.dropdown!.valueShow).toBe('Label1');
      expect(component.selectItems.emit).withContext('El evento selectItems debe lanzarse').toHaveBeenCalledWith([
        {
          label: 'Label1',
          value: { value: 'Value1' },
          selected: true
        }
      ]);

      const secondElement = fixture.debugElement.query(By.css('.ddr-dropdown__panel-items ul li:nth-child(2) .ddr-checkbox__container--input'));
      secondElement.triggerEventHandler('click');

      expect(component.value).toEqual([
        { value: 'Value1' },
        { value: 'Value2' }
      ]);
      expect(component.dropdown!.valueShow).toBe('Label1, Label2');
      expect(component.selectItems.emit).withContext('El evento selectItems debe lanzarse').toHaveBeenCalledWith([
        {
          label: 'Label1',
          value: { value: 'Value1' },
          selected: true
        },
        {
          label: 'Label2',
          value: { value: 'Value2' },
          selected: true
        },
      ]);

      secondElement.triggerEventHandler('click');

      expect(component.value).toEqual([
        { value: 'Value1' }
      ]);
      expect(component.dropdown!.valueShow).toBe('Label1');
      expect(component.selectItems.emit).withContext('El evento selectItems debe lanzarse').toHaveBeenCalledWith([
        {
          label: 'Label1',
          value: { value: 'Value1' },
          selected: true
        }
      ]);
      firstElement.triggerEventHandler('click');

      expect(component.value).toEqual([]);
      expect(component.dropdown!.valueShow).toBe('');
      expect(component.selectItems.emit).withContext('El evento selectItems debe lanzarse').toHaveBeenCalledWith([]);

    });
  }));

  it('clean values', waitForAsync(() => {

    fixture.detectChanges();
    fixture.whenStable().then(() => {

      spyOn(component.selectItems, "emit");

      spyOn(component.changeValue, "subscribe");
      component.writeValue([
        { value: 'Value1' },
        { value: 'Value2' }
      ]);
      fixture.detectChanges();

      expect(component.value).toEqual([
        { value: 'Value1' },
        { value: 'Value2' }
      ]);
      expect(component.dropdown!.valueShow).toBe('Label1, Label2');
      fixture.detectChanges();

      component.writeValue(null);
      fixture.detectChanges();

      expect(component.value).toEqual(null);
      expect(component.dropdown!.valueShow).toBe('');
      fixture.detectChanges();

    });
  }));
});
