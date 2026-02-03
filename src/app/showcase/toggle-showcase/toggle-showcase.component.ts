import { Component, inject, signal } from '@angular/core';
import { DdrToastService, DdrToggleComponent, DdrTranslatePipe, DdrTranslateService } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { Field, form } from '@angular/forms/signals';

@Component({
  selector: 'toggle-showcase',
  templateUrl: './toggle-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrToggleComponent,
    DdrTranslatePipe,
    Field
  ],
  providers: [
    DdrToastService
  ]
})
export class ToggleShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  // Showcase 1

  public value1: boolean = false;
  
  private toggleModelEx1 = signal({
    example1: false
  })
  public formToggleEx1 = form(this.toggleModelEx1)

  // Showcase 2

  public value2: boolean = false;

  // Showcase 3

  public value3: boolean = false;

  // Showcase 6

  public value6: boolean = true;

  private toggleModelEx6 = signal({
    example6: true
  })
  public formToggleEx6 = form(this.toggleModelEx6)

  toggleValue(value: boolean) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      value + ''
    );
  }
}
