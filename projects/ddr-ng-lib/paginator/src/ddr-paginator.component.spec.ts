import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdrPaginatorComponent } from './ddr-paginator.component';
import { beforeEach, describe, expect, it } from 'vitest';

describe('DdrPaginatorComponent', () => {
  let component: DdrPaginatorComponent;
  let fixture: ComponentFixture<DdrPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DdrPaginatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DdrPaginatorComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('page', 1)
    fixture.componentRef.setInput('pageSize', 10)
    fixture.componentRef.setInput('totalItems', 0)
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
