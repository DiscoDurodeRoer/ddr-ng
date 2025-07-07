import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DdrToggleComponent } from '../components/ddr-toggle/ddr-toggle.component';
import { DdrTranslatePipe } from '../pipes/ddr-translate.pipe';
import { DdrControlValueAccessor } from '../components/ddr-ngmodel-base/ddr-control-value-accessor-base.component';

describe('DdrRadioComponent', () => {
    let fixture: ComponentFixture<DdrToggleComponent>;
    let component: DdrToggleComponent;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                DdrControlValueAccessor,
                DdrTranslatePipe,
                DdrToggleComponent
            ]
        }).compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(DdrToggleComponent);
                component = fixture.componentInstance;
            });
    }));
    it('should change value', fakeAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            spyOn(component.toggled, "emit");

            let button = fixture.debugElement.query(By.css('.ddr-toggle__btn'));
            button.triggerEventHandler('click');
            fixture.detectChanges();

            expect(component.toggled.emit).withContext('El evento toggled debe lanzarse').toHaveBeenCalledWith(true);
            expect(component.value).toBeTrue();
            button.triggerEventHandler('click');

            expect(component.toggled.emit).withContext('El evento toggled debe lanzarse').toHaveBeenCalledWith(false);
            expect(component.value).toBeFalse();

        });
    }));

    it('should be active', fakeAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            component.writeValue(true);
            fixture.detectChanges();
            expect(component.value).toBeTrue();

        });
    }));

});
