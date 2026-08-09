import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdrInputNumberComponent } from './ddr-input-number.component';
import { beforeEach, describe, expect, it } from 'vitest';

describe('DdrInputNumberComponent', () => {
  let component: DdrInputNumberComponent;
  let fixture: ComponentFixture<DdrInputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DdrInputNumberComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DdrInputNumberComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
