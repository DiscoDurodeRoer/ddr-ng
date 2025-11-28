import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DdrButtonComponent } from '../components/ddr-button/ddr-button.component';

describe('DdrButtonComponent', () => {
    let fixture: ComponentFixture<DdrButtonComponent>;
    let component: DdrButtonComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [
                DdrButtonComponent
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(DdrButtonComponent);
        component = fixture.componentInstance;
    });
    
    it('should click button', async () => {
        fixture.detectChanges();
        await fixture.whenStable();

        let button = fixture.debugElement.query(By.css('button')).nativeElement;
        spyOn(component.action, "emit");
        button.dispatchEvent(new Event('click'));
        await fixture.whenStable();
        fixture.detectChanges();
        expect(component.action.emit).withContext('El evento action debe lanzarse').toHaveBeenCalled();

    });
    it('should not click button', async () => {
        fixture.detectChanges();
        await fixture.whenStable();
        component.disabled = true;

        let button = fixture.debugElement.query(By.css('button')).nativeElement;
        spyOn(component.action, "emit");
        button.dispatchEvent(new Event('click'));
        await fixture.whenStable();
        fixture.detectChanges();
        expect(component.action.emit).withContext('El evento action no debe lanzarse').not.toHaveBeenCalled();

    });
});
