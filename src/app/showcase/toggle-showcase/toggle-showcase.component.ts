import { Component, inject } from '@angular/core';
import { DdrToastService, DdrToggleComponent, DdrTranslatePipe, DdrTranslateService } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'toggle-showcase',
  templateUrl: './toggle-showcase.component.html',
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrToggleComponent,
    DdrTranslatePipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class ToggleShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public value1: boolean = false;
  public value2: boolean = false;
  public value3: boolean = false;
  public value6: boolean = true;

  toggleValue(value: boolean) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      value + ''
    );
  }
}
