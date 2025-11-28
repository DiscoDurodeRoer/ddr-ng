import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DdrCheckboxComponent } from '../components/ddr-checkbox/ddr-checkbox.component';
import { DdrControlValueAccessor } from '../components/ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrTranslatePipe } from '../pipes/ddr-translate.pipe'
import { provideHttpClient } from '@angular/common/http';

describe('DdrCheckboxComponent', () => {
    let fixture: ComponentFixture<DdrCheckboxComponent<string>>;
    let component: DdrCheckboxComponent<string>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                FormsModule,
                DdrControlValueAccessor,
                DdrTranslatePipe,
                DdrCheckboxComponent
            ],
            providers: [
                provideHttpClient()
            ]
        }).compileComponents();

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
    it('should click checks', async () => {
        fixture.detectChanges();
        await fixture.whenStable();

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

    it('should not click checkbox', async () => {
        component.disabled = true;
        fixture.detectChanges();
        await fixture.whenStable();
        spyOn(component.clickCheck, "emit");

        const checkboxes = fixture.debugElement.queryAll(By.css('.ddr-checkbox__container--input'));
        for (const checkbox of checkboxes) {
            checkbox.triggerEventHandler('click');
            await fixture.whenStable();
            fixture.detectChanges();
            expect(component.clickCheck.emit).withContext('El evento clickCheck no debe lanzarse').not.toHaveBeenCalledWith();
        }

    });
});
