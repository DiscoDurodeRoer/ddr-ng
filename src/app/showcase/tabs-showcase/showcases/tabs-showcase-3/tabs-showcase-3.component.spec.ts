import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsShowcase3Component } from './tabs-showcase-3.component';

describe('TabsShowcase3Component', () => {
  let component: TabsShowcase3Component;
  let fixture: ComponentFixture<TabsShowcase3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsShowcase3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsShowcase3Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
