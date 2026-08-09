import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { provideHttpClient, withXhr } from '@angular/common/http';
import { expect, describe, it, vi, beforeEach } from 'vitest';
import { DdrDropdownMultipleComponent } from './ddr-dropdown-multiple.component';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrCheckboxComponent } from 'ddr-ng/components/checkbox';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DdrClickOutsideDirective } from 'ddr-ng/directives/click-outside';
import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';

describe('DdrDropdownMultipleComponent', () => {
  let component: DdrDropdownMultipleComponent<{
    value: string;
  }>;
  let fixture: ComponentFixture<
    DdrDropdownMultipleComponent<{
      value: string;
    }>
  >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        DdrButtonComponent,
        DdrInputGroupComponent,
        DdrCheckboxComponent,
        DdrTranslatePipe,
        DdrClickOutsideDirective,
        DdrDropdownComponent,
        DdrDropdownMultipleComponent,
      ],
      providers: [provideHttpClient(withXhr())],
    }).compileComponents();

    fixture = TestBed.createComponent(
      DdrDropdownMultipleComponent<{
        value: string;
      }>,
    );
    component = fixture.componentInstance;
    fixture.componentRef.setInput('options', [
      {
        label: 'Label1',
        value: { value: 'Value1' },
      },
      {
        label: 'Label2',
        value: { value: 'Value2' },
      },
      {
        label: 'Label3',
        value: { value: 'Value3' },
      },
      {
        label: 'Label4',
        value: { value: 'Value4' },
      },
    ]);
    fixture.componentRef.setInput(
      'compareFn',
      (
        a: {
          value: string;
        },
        b: {
          value: string;
        },
      ) => a.value == b.value,
    );

    fixture.detectChanges();
  });

  it('preload elements', () => {
    vi.spyOn(component.selectItems, 'emit');

    component.value.set([{ value: 'Value2' }, { value: 'Value3' }]);
    fixture.detectChanges();

    expect(component.value()).toEqual([
      { value: 'Value2' },
      { value: 'Value3' },
    ]);

    expect(component.textInput()).toBe('Label2, Label3');

    expect(
      component.selectItems.emit,
      'El evento selectItem no debe lanzarse',
    ).not.toHaveBeenCalledWith([
      {
        label: 'Label2',
        value: { value: 'Value2' },
      },
      {
        label: 'Label3',
        value: { value: 'Value3' },
      },
    ]);
  });

  it('elements should be selected', async () => {
    let inputGroup = fixture.debugElement.query(
      By.directive(DdrInputGroupComponent),
    );
    inputGroup.triggerEventHandler('action');
    await new Promise((r) => setTimeout(r, 150));
    fixture.detectChanges();

    let panelItems = fixture.debugElement.query(
      By.css('.ddr-dropdown__panel-items'),
    );
    expect(panelItems).not.toBeNull();

    vi.spyOn(component.selectItems, 'emit');

    let items = fixture.debugElement.queryAll(
      By.css('.ddr-dropdown__panel-items ul li'),
    );
    items[0].nativeElement.click();

    fixture.detectChanges();

    expect(component.value()).toEqual([{ value: 'Value1' }]);
    expect(component.textInput()).toBe('Label1');
    expect(
      component.selectItems.emit,
      'El evento selectItems debe lanzarse',
    ).toHaveBeenCalledWith([
      {
        label: 'Label1',
        value: { value: 'Value1' },
        selected: true,
      },
    ]);

    items = fixture.debugElement.queryAll(
      By.css('.ddr-dropdown__panel-items ul li'),
    );
    items[1].nativeElement.click();

    fixture.detectChanges();

    expect(component.value()).toEqual([
      { value: 'Value1' },
      { value: 'Value2' },
    ]);
    expect(component.textInput()).toBe('Label1, Label2');
    expect(
      component.selectItems.emit,
      'El evento selectItems debe lanzarse',
    ).toHaveBeenCalledWith([
      {
        label: 'Label1',
        value: { value: 'Value1' },
        selected: true,
      },
      {
        label: 'Label2',
        value: { value: 'Value2' },
        selected: true,
      },
    ]);

    fixture.detectChanges();

    items = fixture.debugElement.queryAll(
      By.css('.ddr-dropdown__panel-items ul li'),
    );
    items[1].nativeElement.click();

    fixture.detectChanges();

    expect(component.value()).toEqual([{ value: 'Value1' }]);
    expect(component.textInput()).toBe('Label1');
    expect(
      component.selectItems.emit,
      'El evento selectItems debe lanzarse',
    ).toHaveBeenCalledWith([
      {
        label: 'Label1',
        value: { value: 'Value1' },
        selected: true,
      },
    ]);

    fixture.detectChanges();

    items = fixture.debugElement.queryAll(
      By.css('.ddr-dropdown__panel-items ul li'),
    );
    items[0].nativeElement.click();

    fixture.detectChanges();

    expect(component.value()).toEqual([]);
    expect(component.textInput()).toBe('');
    expect(
      component.selectItems.emit,
      'El evento selectItems debe lanzarse',
    ).toHaveBeenCalledWith([]);
  });

  it('elements should be selected using checkbox', async () => {
    const inputGroup = fixture.debugElement.query(
      By.directive(DdrInputGroupComponent),
    );
    inputGroup.triggerEventHandler('action');

    await new Promise((r) => setTimeout(r, 150));

    const panelItems = fixture.debugElement.query(
      By.css('.ddr-dropdown__panel-items'),
    );

    fixture.detectChanges();
    expect(panelItems).not.toBeNull();

    vi.spyOn(component.selectItems, 'emit');

    const firstElement = fixture.debugElement.query(
      By.css(
        '.ddr-dropdown__panel-items ul li:nth-child(1) .ddr-checkbox__container--input',
      ),
    );
    firstElement.nativeElement.click();

    expect(component.value()).toEqual([{ value: 'Value1' }]);
    expect(component.textInput()).toBe('Label1');
    expect(
      component.selectItems.emit,
      'El evento selectItems debe lanzarse',
    ).toHaveBeenCalledWith([
      {
        label: 'Label1',
        value: { value: 'Value1' },
        selected: true,
      },
    ]);

    const secondElement = fixture.debugElement.query(
      By.css(
        '.ddr-dropdown__panel-items ul li:nth-child(2) .ddr-checkbox__container--input',
      ),
    );
    secondElement.nativeElement.click();

    expect(component.value()).toEqual([
      { value: 'Value1' },
      { value: 'Value2' },
    ]);
    expect(component.textInput()).toBe('Label1, Label2');
    expect(
      component.selectItems.emit,
      'El evento selectItems debe lanzarse',
    ).toHaveBeenCalledWith([
      {
        label: 'Label1',
        value: { value: 'Value1' },
        selected: true,
      },
      {
        label: 'Label2',
        value: { value: 'Value2' },
        selected: true,
      },
    ]);

    secondElement.nativeElement.click();

    expect(component.value()).toEqual([{ value: 'Value1' }]);
    expect(component.textInput()).toBe('Label1');
    expect(
      component.selectItems.emit,
      'El evento selectItems debe lanzarse',
    ).toHaveBeenCalledWith([
      {
        label: 'Label1',
        value: { value: 'Value1' },
        selected: true,
      },
    ]);
    firstElement.nativeElement.click();

    expect(component.value()).toEqual([]);
    expect(component.textInput()).toBe('');
    expect(
      component.selectItems.emit,
      'El evento selectItems debe lanzarse',
    ).toHaveBeenCalledWith([]);
  });

  it('clean values', () => {
    vi.spyOn(component.selectItems, 'emit');

    component.value.set([{ value: 'Value1' }, { value: 'Value2' }]);
    fixture.detectChanges();

    expect(component.value()).toEqual([
      { value: 'Value1' },
      { value: 'Value2' },
    ]);
    expect(component.textInput()).toBe('Label1, Label2');
    fixture.detectChanges();

    component.value.set([]);
    fixture.detectChanges();

    expect(component.value()).toEqual([]);
    expect(component.textInput()).toBe('');
    fixture.detectChanges();
  });
});
