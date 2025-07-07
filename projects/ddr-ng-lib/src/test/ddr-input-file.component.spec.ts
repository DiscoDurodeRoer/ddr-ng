import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdrInputFileComponent } from '../components/ddr-input-file/ddr-input-file.component';

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
