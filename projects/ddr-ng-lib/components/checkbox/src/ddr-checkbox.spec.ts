import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideHttpClient, withXhr } from '@angular/common/http';
import { expect, describe, it, vi, beforeEach } from 'vitest';
import { DdrCheckboxComponent } from './ddr-checkbox.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';

describe('DdrCheckboxComponent', () => {
  let fixture: ComponentFixture<DdrCheckboxComponent<string>>;
  let component: DdrCheckboxComponent<string>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DdrTranslatePipe, DdrCheckboxComponent],
      providers: [provideHttpClient(withXhr())],
    }).compileComponents();

    fixture = TestBed.createComponent(DdrCheckboxComponent<string>);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('options', [
      { label: 'Java', value: 'java', selected: false },
      { label: 'Angular', value: 'angular', selected: false },
      { label: 'NestJS', value: 'nestjs', selected: false },
      { label: 'Javascript', value: 'javascript', selected: false },
      { label: 'C', value: 'c', selected: false },
      { label: 'C++', value: 'cpp', selected: false },
    ]);
  });
  it('should click checks', () => {
    fixture.detectChanges();

    vi.spyOn(component.clickCheck, 'emit');

    let firstCheckbox = fixture.debugElement.query(
      By.css(
        '.ddr-checkbox__container:first-child .ddr-checkbox__container--input',
      ),
    );
    firstCheckbox.triggerEventHandler('click');

    fixture.detectChanges();
    expect(
      component.clickCheck.emit,
      'El evento clickCheck debe lanzarse',
    ).toHaveBeenCalledWith(['java']);

    let secondCheckbox = fixture.debugElement.query(
      By.css(
        '.ddr-checkbox__container:nth-child(2) .ddr-checkbox__container--input',
      ),
    );
    secondCheckbox.triggerEventHandler('click');

    fixture.detectChanges();
    expect(
      component.clickCheck.emit,
      'El evento clickCheck debe lanzarse',
    ).toHaveBeenCalledWith(['java', 'angular']);

    firstCheckbox.triggerEventHandler('click');

    fixture.detectChanges();
    expect(
      component.clickCheck.emit,
      'El evento clickCheck debe lanzarse',
    ).toHaveBeenCalledWith(['angular']);
  });

  it('should not click checkbox', () => {
    fixture.componentRef.setInput('disabled', true);

    fixture.detectChanges();

    vi.spyOn(component.clickCheck, 'emit');

    const checkboxes = fixture.debugElement.queryAll(
      By.css('.ddr-checkbox__container--input'),
    );
    for (const checkbox of checkboxes) {
      checkbox.triggerEventHandler('click');

      fixture.detectChanges();
      expect(
        component.clickCheck.emit,
        'El evento clickCheck no debe lanzarse',
      ).not.toHaveBeenCalledWith();
    }
  });
});
