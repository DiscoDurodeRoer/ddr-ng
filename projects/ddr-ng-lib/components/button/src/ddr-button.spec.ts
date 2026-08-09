import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { expect, describe, it, vi, beforeEach } from 'vitest';
import { DdrButtonComponent } from './ddr-button.component';

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

    it('should click button', () => {
        fixture.detectChanges();

        let button = fixture.debugElement.query(By.css('button')).nativeElement;
        vi.spyOn(component.action, "emit");
        button.dispatchEvent(new Event('click'));
        fixture.detectChanges();
        expect(component.action.emit, 'El evento action debe lanzarse').toHaveBeenCalled();

    });
    it('should not click button', () => {
        fixture.detectChanges();
        fixture.componentRef.setInput('disabled', true);

        let button = fixture.debugElement.query(By.css('button')).nativeElement;
        vi.spyOn(component.action, "emit");
        button.dispatchEvent(new Event('click'));
        fixture.detectChanges();
        expect(component.action.emit, 'El evento action no debe lanzarse').not.toHaveBeenCalled();

    });
});
