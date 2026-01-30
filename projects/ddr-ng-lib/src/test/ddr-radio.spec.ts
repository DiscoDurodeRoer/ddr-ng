import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DdrRadioComponent } from '../components/ddr-radio/ddr-radio.component';
import { DdrTranslatePipe } from '../pipes/ddr-translate.pipe';
import { DdrControlValueAccessor } from '../directives/ddr-control-value-accessor.directive'

describe('DdrRadioComponent', () => {
    let fixture: ComponentFixture<DdrRadioComponent<string>>;
    let component: DdrRadioComponent<string>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                FormsModule,
                DdrControlValueAccessor,
                DdrTranslatePipe,
                DdrRadioComponent
            ]
        }).compileComponents();

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
        expect(component.options().length).toBe(6);
    });

    it('should click radio', async () => {
        fixture.detectChanges();
        await fixture.whenStable();

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

    it('should not call event with same value', async () => {
        fixture.detectChanges();
        await fixture.whenStable();

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

    it('option should be selected by value', async () => {

        fixture.detectChanges();
        await fixture.whenStable()

        spyOn(component.changeValue, "subscribe");
        component.writeValue('java');
        fixture.detectChanges();

        let firstRadio = fixture.debugElement.query(By.css('.ddr-radio__container:nth-child(1) .ddr-radio__container--input--active'));
        expect(firstRadio).not.toBeNull();
        expect(component.value).toBe('java');

    });

});
