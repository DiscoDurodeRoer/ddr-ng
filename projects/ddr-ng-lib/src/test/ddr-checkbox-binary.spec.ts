import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DdrControlValueAccessor } from '../components/ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrTranslatePipe } from '../pipes/ddr-translate.pipe'
import { provideHttpClient } from '@angular/common/http';
import { DdrCheckboxBinaryComponent } from '../components/ddr-checkbox-binary/ddr-checkbox-binary.component';

describe('DdrCheckboxBinaryComponent', () => {
    let fixture: ComponentFixture<DdrCheckboxBinaryComponent>;
    let component: DdrCheckboxBinaryComponent;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                DdrControlValueAccessor,
                DdrTranslatePipe,
                DdrCheckboxBinaryComponent
            ],
            providers: [
                provideHttpClient()
            ]
        }).compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(DdrCheckboxBinaryComponent);
                component = fixture.componentInstance;
            });
    }));
    it('should click check binary', fakeAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            spyOn(component.clickCheck, "emit");

            let firstCheckbox = fixture.debugElement.query(By.css('.ddr-checkbox__container--input'));
            firstCheckbox.triggerEventHandler('click');
            tick();
            fixture.detectChanges();
            expect(component.clickCheck.emit).withContext('El evento clickCheck debe lanzarse').toHaveBeenCalledWith(true);

            firstCheckbox.triggerEventHandler('click');
            tick();
            fixture.detectChanges();
            expect(component.clickCheck.emit).withContext('El evento clickCheck debe lanzarse').toHaveBeenCalledWith(false);

        });
    }));
    it('checkbox selected first time', fakeAsync(() => {
        component.value = true;
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            let checkbox = fixture.debugElement.query(By.css('.ddr-checkbox__container--input--active'));

            expect(checkbox).toBeNull();

        });
    }));
    it('should not click checkbox', fakeAsync(() => {
        component.disabled = true;
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            spyOn(component.clickCheck, "emit");

            const checkbox = fixture.debugElement.query(By.css('.ddr-checkbox__container--input'));
            checkbox.triggerEventHandler('click');
            tick();
            fixture.detectChanges();
            expect(component.clickCheck.emit).withContext('El evento clickCheck no debe lanzarse').not.toHaveBeenCalledWith(true);

        });
    }));
});
