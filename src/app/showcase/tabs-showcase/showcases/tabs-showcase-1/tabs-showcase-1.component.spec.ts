import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsShowcase1Component } from './tabs-showcase-1.component';

describe('TabsShowcase1Component', () => {
  let component: TabsShowcase1Component;
  let fixture: ComponentFixture<TabsShowcase1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsShowcase1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsShowcase1Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
