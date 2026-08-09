import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DdrInputFileComponent } from './ddr-input-file.component';
import { expect, describe, it, vi, beforeEach } from 'vitest';

describe('DdrInputFileComponent', () => {
  let component: DdrInputFileComponent;
  let fixture: ComponentFixture<DdrInputFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DdrInputFileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DdrInputFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
