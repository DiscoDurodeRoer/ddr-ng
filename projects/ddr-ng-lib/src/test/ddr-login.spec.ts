import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DdrAuth } from '../common/ddr-auth.model';
import { DdrButtonComponent } from '../components/ddr-button/ddr-button.component';
import { DdrInputComponent } from '../components/ddr-input/ddr-input.component';
import { DdrLoginComponent } from '../components/ddr-login/ddr-login.component';
import { DdrInputPasswordComponent } from '../components/ddr-input-password/ddr-input-password.component';
import { DdrConstantsService } from '../services/ddr-constants.service';
import { DdrInputGroupComponent } from '../components/ddr-input-group/ddr-input-group.component';
import { DdrTranslatePipe } from '../pipes/ddr-translate.pipe';
import { provideHttpClient } from '@angular/common/http';

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
                DdrLoginComponent
            ],
            providers: [
                provideHttpClient()
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(DdrLoginComponent);
        ddrConstantsService = TestBed.inject(DdrConstantsService)
        component = fixture.componentInstance;
    });
    it('should emit user', async () => {
        fixture.detectChanges();
        await fixture.whenStable();
        const inputUsername: DdrInputComponent = fixture.debugElement.query(By.css('.ddr-login__user-input')).componentInstance;
        const inputPassword: DdrInputPasswordComponent = fixture.debugElement.query(By.css('.ddr-login__input-password')).componentInstance;;
        const button: DdrButtonComponent = fixture.debugElement.query(By.css('.ddr-login__submit-button')).componentInstance;
        const form = fixture.debugElement.query(By.css('form')).nativeElement;

        inputUsername.value = 'Test';
        inputPassword.value = 'Test';

        const expected: DdrAuth = {
            username: 'Test',
            password: 'Test'
        }

        expect(button.type()).withContext('El boton debe ser de tipo submit').toBe(ddrConstantsService.TYPE_BUTTON.SUBMIT);

        spyOn(component, 'login');
        form.dispatchEvent(new Event('submit'));
        expect(component.login).toHaveBeenCalled();

        expect(component.user).toEqual(expected);
    });

});
