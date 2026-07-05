import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DdrToggleComponent } from '../components/ddr-toggle/ddr-toggle.component';
import { DdrTranslatePipe } from '../pipes/ddr-translate.pipe';
import { expect, describe, it, vi, beforeEach } from 'vitest';

describe('DdrToggleComponent', () => {
    let fixture: ComponentFixture<DdrToggleComponent>;
    let component: DdrToggleComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                DdrTranslatePipe,
                DdrToggleComponent
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(DdrToggleComponent);
        component = fixture.componentInstance;
    });

    it('should change value', () => {
        fixture.detectChanges();
        

        vi.spyOn(component.toggled, "emit");

        let button = fixture.debugElement.query(By.css('.ddr-toggle__button'));
        button.triggerEventHandler('click');
        fixture.detectChanges();

        expect(component.toggled.emit, 'El evento toggled debe lanzarse').toHaveBeenCalledWith(true);
        expect(component.value()).toBe(true);
        button.triggerEventHandler('click');

        expect(component.toggled.emit, 'El evento toggled debe lanzarse').toHaveBeenCalledWith(false);
        expect(component.value()).toBe(false);

    });

    it('should be active', () => {
        fixture.detectChanges();
        

        component.value.set(true);
        fixture.detectChanges();
        expect(component.value()).toBe(true);

    });

});
