import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DdrCheckboxComponent } from '../components/ddr-checkbox/ddr-checkbox.component';
import { DdrNgModelBase } from '../components/ddr-ngmodel-base/ddr-ngmodel-base.component';
import { DdrTranslatePipe } from '../pipes/ddr-translate.pipe'
import { HttpClientModule } from '@angular/common/http';

describe('DdrCheckboxComponent', () => {
    let fixture: ComponentFixture<DdrCheckboxComponent<string>>;
    let component: DdrCheckboxComponent<string>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                DdrNgModelBase,
                DdrTranslatePipe,
                DdrCheckboxComponent,
                HttpClientModule
            ]
        }).compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(DdrCheckboxComponent<string>);
                component = fixture.componentInstance;
                component.options = [
                    { label: 'Java', value: 'java', selected: false },
                    { label: 'Angular', value: 'angular', selected: false },
                    { label: 'NestJS', value: 'nestjs', selected: false },
                    { label: 'Javascript', value: 'javascript', selected: false },
                    { label: 'C', value: 'c', selected: false },
                    { label: 'C++', value: 'cpp', selected: false }
                ]
            });
    }));
    it('should click checks', fakeAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            spyOn(component.clickCheck, "emit");

            let firstCheckbox = fixture.debugElement.query(By.css('.ddr-checkbox__container:first-child .ddr-checkbox__container--input'));
            firstCheckbox.triggerEventHandler('click');
            
            fixture.detectChanges();
            expect(component.clickCheck.emit).withContext('El evento clickCheck debe lanzarse').toHaveBeenCalledWith(['java']);

            let secondCheckbox = fixture.debugElement.query(By.css('.ddr-checkbox__container:nth-child(2) .ddr-checkbox__container--input'));
            secondCheckbox.triggerEventHandler('click');
            
            fixture.detectChanges();
            expect(component.clickCheck.emit).withContext('El evento clickCheck debe lanzarse').toHaveBeenCalledWith(['java', 'angular']);

            firstCheckbox.triggerEventHandler('click');
            
            fixture.detectChanges();
            expect(component.clickCheck.emit).withContext('El evento clickCheck debe lanzarse').toHaveBeenCalledWith(['angular']);

        });
    }));
    it('should click check binary', fakeAsync(() => {
        component.binary = true;
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            spyOn(component.clickCheckBinary, "emit");

            let firstCheckbox = fixture.debugElement.query(By.css('.ddr-checkbox__container--input'));
            firstCheckbox.triggerEventHandler('click');
            tick();
            fixture.detectChanges();
            expect(component.clickCheckBinary.emit).withContext('El evento clickCheckBinary debe lanzarse').toHaveBeenCalledWith(true);

            firstCheckbox.triggerEventHandler('click');
            tick();
            fixture.detectChanges();
            expect(component.clickCheckBinary.emit).withContext('El evento clickCheckBinary debe lanzarse').toHaveBeenCalledWith(false);

        });
    }));
});
