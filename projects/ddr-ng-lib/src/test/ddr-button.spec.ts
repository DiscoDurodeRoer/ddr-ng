import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DdrButtonComponent } from '../components/ddr-button/ddr-button.component';

describe('DdrButtonComponent', () => {
    let fixture: ComponentFixture<DdrButtonComponent>;
    let component: DdrButtonComponent;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                DdrButtonComponent
            ]
        }).compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(DdrButtonComponent);
                component = fixture.componentInstance;
            });
    }));
    it('should click button', fakeAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            let button = fixture.debugElement.query(By.css('button')).nativeElement;
            spyOn(component.action, "emit");
            button.dispatchEvent(new Event('click'));
            tick();
            fixture.detectChanges();
            expect(component.action.emit).withContext('El evento action debe lanzarse').toHaveBeenCalled();
        });
    }));
    it('should not click button', fakeAsync(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {

            component.disabled = true;
            
            let button = fixture.debugElement.query(By.css('button')).nativeElement;
            spyOn(component.action, "emit");
            button.dispatchEvent(new Event('click'));
            tick();
            fixture.detectChanges();
            expect(component.action.emit).withContext('El evento action no debe lanzarse').not.toHaveBeenCalled();

        });
    }));
});
