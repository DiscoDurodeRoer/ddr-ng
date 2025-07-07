import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFileShowcaseComponent } from './input-file-showcase.component';

describe('InputFileShowcaseComponent', () => {
  let component: InputFileShowcaseComponent;
  let fixture: ComponentFixture<InputFileShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFileShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFileShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
