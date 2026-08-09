import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideHttpClient, withXhr } from '@angular/common/http';
import { expect, describe, it, vi, beforeEach } from 'vitest';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrLoginComponent } from './ddr-login.component';
import { DdrConstantsService } from 'ddr-ng/constants';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrAuth } from './bean/ddr-auth.model';

describe('DdrLoginComponent', () => {
  let fixture: ComponentFixture<DdrLoginComponent>;
  let component: DdrLoginComponent;
  let ddrConstantsService: DdrConstantsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DdrButtonComponent,
        DdrInputComponent,
        DdrInputGroupComponent,
        DdrInputPasswordComponent,
        DdrTranslatePipe,
        DdrLoginComponent,
      ],
      providers: [provideHttpClient(withXhr())],
    }).compileComponents();

    fixture = TestBed.createComponent(DdrLoginComponent);
    ddrConstantsService = TestBed.inject(DdrConstantsService);
    component = fixture.componentInstance;
  });
  it('should emit user', () => {
    fixture.detectChanges();

    const inputUsername: DdrInputComponent = fixture.debugElement.query(
      By.css('.ddr-login__user-input'),
    ).componentInstance;
    const inputPassword: DdrInputPasswordComponent = fixture.debugElement.query(
      By.css('.ddr-login__input-password'),
    ).componentInstance;
    const button: DdrButtonComponent = fixture.debugElement.query(
      By.css('.ddr-login__submit-button'),
    ).componentInstance;
    const form = fixture.debugElement.query(By.css('form')).nativeElement;

    inputUsername.value.set('Test');
    inputPassword.value.set('Test');

    const expected: DdrAuth = {
      username: 'Test',
      password: 'Test',
    };

    expect(button.type(), 'El boton debe ser de tipo submit').toBe(
      ddrConstantsService.TYPE_BUTTON.SUBMIT,
    );

    vi.spyOn(component, 'login');
    form.dispatchEvent(new Event('submit'));
    expect(component.login).toHaveBeenCalled();

    // expect(component.user).toEqual(expected);
  });
});
