import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DdrToggleComponent } from '../components/ddr-toggle/ddr-toggle.component';
import { DdrTranslatePipe } from '../pipes/ddr-translate.pipe';
import { DdrControlValueAccessor } from '../directives/ddr-control-value-accessor.directive';

describe('DdrToggleComponent', () => {
    let fixture: ComponentFixture<DdrToggleComponent>;
    let component: DdrToggleComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                FormsModule,
                DdrControlValueAccessor,
                DdrTranslatePipe,
                DdrToggleComponent
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(DdrToggleComponent);
        component = fixture.componentInstance;
    });

    it('should change value', async () => {
        fixture.detectChanges();
        await fixture.whenStable();

        spyOn(component.toggled, "emit");

        let button = fixture.debugElement.query(By.css('.ddr-toggle__button'));
        button.triggerEventHandler('click');
        fixture.detectChanges();

        expect(component.toggled.emit).withContext('El evento toggled debe lanzarse').toHaveBeenCalledWith(true);
        expect(component.value).toBeTrue();
        button.triggerEventHandler('click');

        expect(component.toggled.emit).withContext('El evento toggled debe lanzarse').toHaveBeenCalledWith(false);
        expect(component.value).toBeFalse();

    });

    it('should be active', async () => {
        fixture.detectChanges();
        await fixture.whenStable();

        component.writeValue(true);
        fixture.detectChanges();
        expect(component.value).toBeTrue();

    });

});
