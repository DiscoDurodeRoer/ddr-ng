import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DdrRadioComponent } from '../components/ddr-radio/ddr-radio.component';
import { DdrTranslatePipe } from '../pipes/ddr-translate.pipe';
import { DdrNgModelBase } from '../components/ddr-ngmodel-base/ddr-ngmodel-base.component'
import { HttpClientModule } from '@angular/common/http';

describe('DdrRadioComponent', () => {
    let fixture: ComponentFixture<DdrRadioComponent<string>>;
    let component: DdrRadioComponent<string>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                DdrNgModelBase,
                DdrTranslatePipe,
                DdrRadioComponent,
                HttpClientModule
            ]
        }).compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(DdrRadioComponent<string>);
                component = fixture.componentInstance;
                component.options = [
                    { label: 'Java', value: 'java', selected: false },
                    { label: 'Angular', value: 'angular', selected: false },
                    { label: 'NestJS', value: 'nestjs', selected: false },
                    { label: 'Javascript', value: 'javascript', selected: false },
                    { label: 'C', value: 'c', selected: false },
                    { label: 'C++', value: 'cpp', selected: false }
                ]
                expect(component.options.length).toBe(6);
            });
    }));
    it('should click radio', fakeAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            spyOn(component.clickRadio, "emit");

            let firstRadio = fixture.debugElement.query(By.css('.ddr-radio__container:nth-child(1) .ddr-radio__container--input'));
            firstRadio.triggerEventHandler('click');
            fixture.detectChanges();

            expect(component.clickRadio.emit).withContext('El evento clickRadio debe lanzarse').toHaveBeenCalledWith('java');
            expect(component.value).toBe('java')

            let secondRadio = fixture.debugElement.query(By.css('.ddr-radio__container:nth-child(2) .ddr-radio__container--input'));
            secondRadio.triggerEventHandler('click');
            fixture.detectChanges();

            expect(component.clickRadio.emit).withContext('El evento clickRadio debe lanzarse').toHaveBeenCalledWith('angular');
            expect(component.value).toBe('angular');

        });
    }));

    it('should not call event with same value', fakeAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            const spy = spyOn(component.clickRadio, "emit");

            let firstRadio = fixture.debugElement.query(By.css('.ddr-radio__container:nth-child(1) .ddr-radio__container--input'));
            firstRadio.triggerEventHandler('click')
            fixture.detectChanges();

            expect(component.clickRadio.emit).withContext('El evento clickRadio debe lanzarse').toHaveBeenCalledWith('java');
            expect(component.value).toBe('java');

            spy.calls.reset();

            firstRadio.triggerEventHandler('click')
            fixture.detectChanges();

            expect(component.clickRadio.emit).withContext('El evento clickRadio no debe lanzarse').toHaveBeenCalledTimes(0)
            expect(component.value).toBe('java')

        });
    }));


    it('option should be selected by value', fakeAsync(() => {

        fixture.detectChanges();
        fixture.whenStable().then(() => {

            spyOn(component.changeValue, "subscribe");
            component.writeValue('java');
            fixture.detectChanges();

            let firstRadio = fixture.debugElement.query(By.css('.ddr-radio__container:nth-child(1) .ddr-radio__container--input--active'));
            expect(firstRadio).not.toBeNull();
            expect(component.value).toBe('java');

        });
    }));

});
