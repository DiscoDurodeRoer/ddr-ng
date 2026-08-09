import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsShowcase2Component } from './tabs-showcase-2.component';

describe('TabsShowcase2Component', () => {
  let component: TabsShowcase2Component;
  let fixture: ComponentFixture<TabsShowcase2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsShowcase2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsShowcase2Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
