import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideHttpClient, withXhr } from '@angular/common/http';
import { expect, describe, it, vi, beforeEach } from 'vitest';
import { DdrCheckboxBinaryComponent } from './ddr-checkbox-binary.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';

describe('DdrCheckboxBinaryComponent', () => {
  let fixture: ComponentFixture<DdrCheckboxBinaryComponent>;
  let component: DdrCheckboxBinaryComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DdrTranslatePipe, DdrCheckboxBinaryComponent],
      providers: [provideHttpClient(withXhr())],
    }).compileComponents();

    fixture = TestBed.createComponent(DdrCheckboxBinaryComponent);
    component = fixture.componentInstance;
  });

  it('should click check binary', () => {
    fixture.detectChanges();

    vi.spyOn(component.clickCheck, 'emit');

    let checkbox = fixture.debugElement.query(
      By.css('.ddr-checkbox__container--input'),
    );
    checkbox.nativeElement.click();

    fixture.detectChanges();

    expect(
      component.clickCheck.emit,
      'El evento clickCheck debe lanzarse',
    ).toHaveBeenCalledWith(true);

    checkbox = fixture.debugElement.query(
      By.css('.ddr-checkbox__container--input'),
    );
    checkbox.nativeElement.click();

    fixture.detectChanges();

    expect(
      component.clickCheck.emit,
      'El evento clickCheck debe lanzarse',
    ).toHaveBeenCalledWith(false);
  });

  it('checkbox selected first time', () => {
    component.value.set(true);

    fixture.detectChanges();

    let checkbox = fixture.debugElement.query(
      By.css('.ddr-checkbox__container--input--active'),
    );

    expect(checkbox).not.toBeNull();
  });

  it('should not click checkbox', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    vi.spyOn(component.clickCheck, 'emit');

    const checkbox = fixture.debugElement.query(
      By.css('.ddr-checkbox__container--input'),
    );
    checkbox.triggerEventHandler('click');

    fixture.detectChanges();

    expect(
      component.clickCheck.emit,
      'El evento clickCheck no debe lanzarse',
    ).not.toHaveBeenCalledWith(true);
  });
});
